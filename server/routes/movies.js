const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/", async (req, res, next) => {
  const movies = await Movies.find();
  res.status(200).json(movies);
});

router.post("/", async (req, res) => {
  const newMovie = await Movies.create(req.body);
  res.status(200).json(newMovie);
});

module.exports = router;
