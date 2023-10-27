const fetchAllAlbums = require("~root/actions/albums/fetchAlbums");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllAlbums = async (req, res) => {
  try {
    const { albums } = await fetchAllAlbums();
    res.status(201).send({
      albums
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllAlbums;