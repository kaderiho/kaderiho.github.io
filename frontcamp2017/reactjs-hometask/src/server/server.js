import dbConfig from './config/db.config';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';

import localSignupPassportStrategy from './passport/local-signup';
import localLoginPassportStrategy from './passport/local-login';

import authCheckMiddleware from './middleware/auth-check';
import renderedApp from '../shared/renderedApp';
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
passport.use('local-signup', localSignupPassportStrategy);
passport.use('local-login', localLoginPassportStrategy);

app.use('/articles', authCheckMiddleware, (req, res) => res.send(renderedApp(req)));
app.use('/signup', signupRoutes);
app.use('/auth', authRoutes);
app.use('/', (req, res) => res.send(renderedApp(req)));

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
