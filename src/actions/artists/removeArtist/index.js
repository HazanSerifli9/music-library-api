const deleteArtist = require("./queries/deleteArtist");

const removeArtist = async ({ artistId }) => {
  const deletedArtist = await deleteArtistQuery({
    artistId
  });
  return { deletedArtist };
};

module.exports = removeArtist;