const R = require('ramda');

exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

exports.flashValidationErrors = (err, req, res, next) => {
    if (!err.errors) {
        return next(err);
    }

    const validatorErrors = {};
    R.forEachObjIndexed((val, key) => validatorErrors[key] = val.message)(err.errors);

    req.flash('validatorErrors', validatorErrors);
    res.redirect('back');
};

exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || '';

    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack.replace(/[a-z0-9_-]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };

    res.status(err.status || 500);
    res.format({
        'text/html': () => {
            res.render('index', errorDetails);
        },
        'application/json': () => res.json(errorDetails)
    });
};

exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.render('index', {
        message: err.message,
        error: {}
    });
};

