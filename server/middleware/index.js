const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

module.exports = server => {
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(cors());
};
