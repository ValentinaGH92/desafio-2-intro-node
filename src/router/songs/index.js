const express = require("express");
const router = express.Router();

const createSong = require("../../services/songs/createSong");
const getSong = require("../../services/songs/getSongs");
const updateSong = require("../../services/songs/updateSong");
const deleteSong = require("../../services/songs/deleteSong");

router.post("/canciones", (req, res) => {
  createSong(req, res);
});

router.get("/canciones", (req, res) => {
  getSong(req, res);
});

router.put("/canciones/:id", (req, res) => {
  updateSong(req, res);
});

router.delete("/canciones/:id", (req, res) => {
  deleteSong(req, res);
});

module.exports = router;
