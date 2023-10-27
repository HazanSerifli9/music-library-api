const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByAlbumId = ({ albumId }) => submitQuery
   
SELECT song_id, songs.name, artists.name, artists.genre, albums.name, albums.year
FROM songs
LEFT JOIN Artists ON artists.artist_id = Songs.artist_id
LEFT JOIN Albums ON albums.album_id = Songs.album_id
WHERE songs.album_id=${albumId}

module.exports = camelKeys(selectSongByAlbumId);