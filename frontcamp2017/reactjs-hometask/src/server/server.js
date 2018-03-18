import dbConfig from './config/db.config';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';

import GoogleLoginPassportStrategy from './passport/google-login';
import localSignupPassportStrategy from './passport/local-signup';
import localLoginPassportStrategy from './passport/local-login';

import authenticate from './middleware/auth-check';
import renderedApp from '../shared/renderedApp';
import articlesRoutesAPI from './routes/articles-api';
import articlesRoutes from './routes/articles';
import signupRoutes from './routes/signup';
import authRoutes from './routes/auth';

const app = express();

mongoose.connect(dbConfig.dbURI, () => {
    console.dir('Connected to MongoDB');
}, (err) => {
    console.dir(err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(passport.initialize());

// Load passport strategies
passport.use(GoogleLoginPassportStrategy);
passport.use('local-signup', localSignupPassportStrategy);
passport.use('local-login', localLoginPassportStrategy);

// ARTICLES pages
app.use('/articles/api', authenticate, articlesRoutesAPI);
app.use('/articles', articlesRoutes);   // TODO: need to predefine state state

// AUTHORIZATION / SIGN UP pages
app.use('/signup', signupRoutes);
app.use('/auth', authRoutes);

// Base
app.use('/', (req, res) => res.send(renderedApp(req)));

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
