const http = require("http");
const { initializeSocket } = require("./socket/socket");

require("dotenv").config();
const { mongoConnect } = require("./db/mongo");
const { app, server } = require("./socket/socket");

const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const api = require("./routes/api");
app.use(cookieParser()); // allows us to parse incoming cookies
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(morgan('combined'));

app.use(express.json());

app.use("/v1", api);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
  await mongoConnect();
}

startServer();
