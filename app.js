const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const caseRoutes = require('./api/routes/cases');

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/cases', caseRoutes);

module.exports = app;
