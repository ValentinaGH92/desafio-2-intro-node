const fs = require("fs");
const path = require("path");
const repertorioFilePath = path.join(__dirname, "../../data/repertorio.json");

const getSong = (req, res) => {
  const data = JSON.parse(fs.readFileSync(repertorioFilePath, "utf8"));

  res.send(data);
};

module.exports = getSong;
