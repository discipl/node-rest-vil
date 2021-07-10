const express = require('express');
const app = express();
const morgan = require('morgan');
/**
 * const bodyParser = require ('body-parser');
 */

const productRoutes = require('./api/routes/products');
const caseRoutes = require('./api/routes/cases');

app.use(morgan('dev'));
/**
 *  You may have added a line to your code that looks like the following:

    app.use(bodyparser.json()); //utilizes the body-parser package

    If you are using Express 4.16+ you can now replace that line with:

    app.use(express.json()); //Used to parse JSON bodies

    This should not introduce any breaking changes into your applications since the code in express.json() is based on bodyparser.json().
 */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/cases', caseRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
