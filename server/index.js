const express = require("express");
const config = require("./middleware");
const { categories, doctors } = require("./data");

const server = express();

config(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running." });
});

server.get("/categories", (req, res) => {
  res.json(categories);
});

server.get("/doctors", (req, res) => {
  res.json(doctors);
});

server.get("/doctors/:categoryId", (req, res) => {
  const { categoryId } = req.params;
  const foundDoctors = doctors.filter(d => d.categoryId == categoryId);
  if (!foundDoctors || foundDoctors.length === 0) {
    res
      .status(404)
      .json({ Error: `No doctors exist with categoryId ${categoryId}` });
  } else {
    res.status(200).json(foundDoctors);
  }
});

const port = 9001;

server.listen(port, () => console.log(`Server listening on port ${port}.`));
