require('dotenv').config();
require('express-async-errors');

const cors = require('cors');
const express = require('express');
const connectToDatabase = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes); 
app.use("/api/login",authRoutes);

const port = process.env.PORT || 8080; 

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//continue from 24:15
