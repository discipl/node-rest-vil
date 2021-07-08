const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const caseRoutes = require('./api/routes/cases');

app.use('/products', productRoutes);
app.use('/cases', caseRoutes);

module.exports = app;
