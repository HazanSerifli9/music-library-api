const { submitQuery } = require("~root/lib/database");

const deleteSong = ({ songId }) => submitQuery`
    DELETE FROM
        songs
    WHERE
        song_id=${songId}
`;

module.exports = deleteSong;