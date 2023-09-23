const fs = require("fs");
const path = require("path");
const repertorioFilePath = path.join(__dirname, "../../data/repertorio.json");

const updateSong = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedSong = req.body;

  const data = JSON.parse(fs.readFileSync(repertorioFilePath, "utf8"));

  const findSongIndex = data.findIndex((song) => song.id === id);

  data.splice(findSongIndex, 1);
  data.push(updatedSong);

  fs.writeFileSync(repertorioFilePath, JSON.stringify(data), "utf8");

  res.send(data);
};

module.exports = updateSong;
