const fs = require("fs");
const path = require("path");
const repertorioFilePath = path.join(__dirname, "../../data/repertorio.json");

const createSong = (req, res) => {
  const newSongs = req.body;
  const data = JSON.parse(fs.readFileSync(repertorioFilePath, "utf8"));

  data.push(newSongs);

  fs.writeFileSync(repertorioFilePath, JSON.stringify(data), "utf8");

  res.send(data);
};

module.exports = createSong;
