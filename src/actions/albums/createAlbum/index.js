const insertAlbumByArtistId = require("./queries/insertAlbumByArtistId.js");

const createAlbum = async ({ artistId, name, year }) => {
  const albumId = await insertAlbumByArtistId({
    artistId,
    name,
    year
  });

  return { albumId };
};

module.exports = createAlbum;