const express = require("express");
const cors = require("cors");
const { db } = require("./database/db");
//import routes
const route_user = require("./routes/route_user");
const route_book = require("./routes/route_book");

// server with express
const server = express();

// cors
var corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  credentials: true,
  optionsSuccessStatus: 204
};
server.use(cors(corsOptions));
// json fromats
server.use(express.json());

// routes
server.use('/user', route_user);
server.use('/book', route_book);

// listen server
server.listen(3001, () => {
  console.log('Server running on port 3001');
  db.sync();
})