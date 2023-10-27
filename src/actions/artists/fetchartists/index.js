const selectArtist = require("./queries/selectArtist");

const fetchArtists = async () => {
  const artists = await selectArtist();

  return { artists };
};

module.exports = fetchArtists;
