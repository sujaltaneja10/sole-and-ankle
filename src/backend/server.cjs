const express = require('express');
const app = express();
const fs = require('fs');
const productDetails = require('./data.cjs');

app.get('/', (req, res) => {
  res.send(productDetails);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
