require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const employee = require('./routes/employees');

//Database Connections
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/employees', employee);

// Listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App is Up and Running at Port: ${port}`);
})