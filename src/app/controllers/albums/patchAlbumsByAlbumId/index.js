const modifyAlbumByAlbumId = require("~root/actions/albums/modifAlbumByAlbumId");
const handleAPIError = require("~root/utils/handleAPIError");

const patchAlbumByAlbumId = async (req, res) => {
  const { albumId } = req.params;
  const { name, year } = req.body;

  try {
    const { album } = await modifyAlbumByAlbumId({
      albumId,
      name,
      year
    });

    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchAlbumByAlbumId;