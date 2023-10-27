const selectAllSongs = require("./queries/selectAllSongs.js");

const fetchAllSongs = async () => {
  const songs = await selectAllSongs();

  return { songs };
};

module.exports = fetchAllSongs;