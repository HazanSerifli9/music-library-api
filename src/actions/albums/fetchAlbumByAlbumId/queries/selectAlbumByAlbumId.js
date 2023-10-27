const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumByAlbumId = ({ albumId }) => submitQuery`
    SELECT 
       *
    FROM albums
    WHERE album_id= ${albumId}
    `;

module.exports = camelKeys(selectAlbumByAlbumId);