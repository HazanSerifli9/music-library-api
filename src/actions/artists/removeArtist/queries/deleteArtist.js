const { submitQuery } = require("~root/lib/database");

const deleteArtist = ({ artistId }) => submitQuery`
    DELETE FROM
        artists
    WHERE
        artist_id=${artistId}
`;

module.exports = deleteArtist;