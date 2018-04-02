let mongoose = require("mongoose");

//Require the dev-dependencies
let ArticlesModel = require('../models/articleModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Articles service', () => {
    beforeEach((done) => {
        ArticlesModel.remove({}, (err) => {
            done();
        });
    });

    // Test /GET articles
    describe('/GET article', () => {
        it('it should GET all the books', (done) => {
            chai.request(server)
                .get('/blogs/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST article', () => {
        it('it should POST an article', (done) => {
            let article = {
                title: "The Lord of the Rings",
                description: "The description of the film"
            };

            chai.request(server)
                .post('/blogs/')
                .send(article)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('title');
                    res.body.should.have.property('description');
                    done();
                });
        });
    });

    describe('/GET/:id article', () => {
        it('it should GET an article by the given id', (done) => {
            let article = new ArticlesModel({ title: "The Lord of the Rings", description: "J.R.R. Tolkien" });

            article.save((err, article) => {
                chai.request(server)
                    .get('/blogs/' + article._id)
                    .send(article)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('Array');
                        res.body[0].should.have.property('title').eql(article.title);
                        res.body[0].should.have.property('description').eql(article.description);
                        done();
                    });
            });
        });
    });

    describe('/PUT/:id article', () => {
        it('it should UPDATE an article given the id', (done) => {
            let article = new ArticlesModel({ title: "The Lord of the Rings", description: "J.R.R. Tolkien"});

            article.save((err, article) => {
                chai.request(server)
                    .put('/blogs/' + article._id)
                    .send({ title: "The Chronicles of Narnia", description: "C.S. Lewis"})
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id article', () => {
        it('it should DELETE an article given the id', (done) => {
            let article = new ArticlesModel({ title: "The Lord of the Rings", description: "J.R.R. Tolkien"});

            article.save((err, article) => {
                chai.request(server)
                    .delete('/blogs/' + article._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});
