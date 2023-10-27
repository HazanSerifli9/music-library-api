const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumsByArtistId = ({ artistId }) => submitQuery`
    SELECT 
       *
    FROM albums
    WHERE artist_id= ${artistId}
    `;

module.exports = camelKeys(selectAlbumsByArtistId);