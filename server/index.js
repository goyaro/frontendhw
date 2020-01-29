const express = require("express");
const config = require("./middleware");

const server = express();

config(server);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

const port = 9001;

server.listen(port, () => console.log(`Server listening on port ${port}.`));
