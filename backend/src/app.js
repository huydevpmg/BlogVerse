const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookiesParser = require('cookie-parser')
const api = require('./routes/api')
const app = express();
app.use(cookiesParser());
app.use(cors({origin: "http://localhost:5173", credentials: true}));
// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
app.use(morgan('combined'));

app.use(express.json());

app.use("/v1", api);


module.exports = app;


