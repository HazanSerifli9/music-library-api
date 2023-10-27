const deleteAlbum = require("./queries/deleteAlbum.js");

const removeAlbum = async ({ albumId }) => {
  const deletedAlbum = await deleteAlbum({
    albumId
  });
  return { deletedAlbum };
};

module.exports = removeAlbum;