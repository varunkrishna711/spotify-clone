require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./db');

const app = express();
connectToDatabase();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
