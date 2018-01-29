var bodyParser  = require('body-parser');
var express     = require('express');
var winston     = require('winston');
var router      = express.Router();
var fs          = require('fs');
var app         = express();

// Logging configuration
winston.configure({
    transports: [
        new (winston.transports.File)({ filename: 'logs.log' })
    ]
});

// Server-side HTML rendering
app.set('views', './server/views');
app.set('view engine', 'pug');

router.get('/*', (req, res) => {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.use('/', router);

// CRUD requests API
app.get('/blogs', (req, res, next) => {
    fs.readFile('./data/articles.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
        next();
    });
});

app.get('/blogs/:id', (req, res, next) => {
    fs.readFile('./data/articles.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let articles;

        try {
            articles = JSON.parse(data);
        } catch(err) {
            throw err;
        }

        let articleId = +req.originalUrl.split('/').slice(-1)[0];

        for (let i = 0,l = articles.length;i < l;i++) {
            if (articles[i].id === articleId) {
                res.send(articles[i]);
                next();
                return;
            }
        }

        res.send('There is no such article');
        next();
    })
});

app.post('/blogs', (req, res, next) => {
    fs.readFile('./data/articles.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let articles;

        try {
            articles = JSON.parse(data);
        } catch (err) {
            throw err;
        }

        let article = req.body;
            article.id = articles.length + 1;
        articles.push(req.body);

        fs.writeFile('./data/articles.json', JSON.stringify(articles), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            res.send('Article has been saved');
            next();
        });
    });
});

app.put('/blogs/:id', (req, res, next) => {
    fs.readFile('./data/articles.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let articles;

        try {
            articles = JSON.parse(data);
        } catch (err) {
            throw err;
        }

        let articleId = +req.originalUrl.split('/').slice(-1)[0];

        for (let i = 0, l = articles.length;i < l;i++) {
            if (articles[i].id === articleId) {
                let article = req.body;
                    article.id = articles[i].id;
                articles[i] = article;
            }
        }

        fs.writeFile('./data/articles.json', JSON.stringify(articles), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            res.send('Article has been updated');
            next();
        });
    });
});

app.delete('/blogs/:id', (req, res, next) => {
    fs.readFile('./data/articles.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let articles;

        try {
            articles = JSON.parse(data);
        } catch (err) {
            throw err;
        }

        let articleId = +req.originalUrl.split('/').slice(-1)[0];

        for (let i = 0, l = articles.length;i < l;i++) {
            if (articles[i].id === articleId) {
                articles.splice(i, 1);
            }
        }

        fs.writeFile('./data/articles.json', JSON.stringify(articles), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            res.send('Article has been deleted');
            next();
        });
    });
});

app.listen('3000');
