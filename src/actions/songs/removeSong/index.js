const deleteSong = require("./queries/deleteSong");

const removeSong = async ({ songId }) => {
  const deletedSong = await deleteSong({
    songId
  });
  return { deletedSong };
};

module.exports = removeSong;