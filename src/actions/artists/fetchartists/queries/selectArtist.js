const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtist = () => submitQuery`
    SELECT 
    artist_id,
       name,
       genre
       FROM artists
`;

module.exports = camelKeys(selectArtist);
