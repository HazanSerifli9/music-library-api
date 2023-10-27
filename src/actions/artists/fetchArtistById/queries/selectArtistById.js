const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
    SELECT 
       artist_id, name, genre
    FROM artists
    WHERE artist_id= ${artistId}
    `;

module.exports = camelKeys(selectArtistById);