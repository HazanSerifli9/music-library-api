const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getArtists = require("./controllers/artists/getArtists");
const postArtist = require("./controllers/artists/postArtist");
const getArtistById = require("./controllers/artists/getArtistById");
const patchArtistById = require("./controllers/artists/patchArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");
const getAllAlbums = require("./controllers/albums/getAllAlbums");
const postAlbumByArtistId = require("./controllers/albums/postAlbumByArtistId");
const getAlbumByArtistId = require("./controllers/albums/getAlbumByAlbumId");
const getAlbumsByArtistId = require("./controllers/albums/getAlbumsByArtistId");
const updateAlbumByAlbumId = require("~root/actions/songs/modifySongById/queries/updateSongById");
const deleteAlbumByAlbumId = require("./controllers/albums/deleteAlbumByAlbumId");
const postSong = require("./controllers/songs/postSong");
const getAllSongs = require("./controllers/songs/getAllSongs");
const getSongByAlbumId = require("./controllers/songs/getSongByAlbumId");
const getSongByArtistId = require("./controllers/songs/getSongByArtistId");
const patchSongById = require("./controllers/songs/patchSongById");
const deleteSongById = require("./controllers/songs/deleteSongById");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.get("/artists", getArtists);

router.post("/artist", postArtist);

router.get("/artists/:artistId", getArtistById);

router.patch("/artist/:artistId", patchArtistById);

router.delete("/artists/:artistId", deleteArtistById);

router.get("/albums", getAllAlbums);

router.post("/artists/:artistId/album", postAlbumByArtistId);

router.get("/artists/:artistId/albums", getAlbumByArtistId);

router.get("/album/:albumId", getAlbumsByArtistId);

router.patch("/albums/:albumId", updateAlbumByAlbumId);

router.delete("/albums/:albumId", deleteAlbumByAlbumId);

router.post("/artists/:artistId/albums/:albumId/songs", postSong);

router.get("/songs", getAllSongs);

router.get("/albums/:albumId/songs", getSongByAlbumId);

router.get("/artists/:artistId/songs", getSongByArtistId);

router.patch("/songs/:songId", patchSongById);

router.delete("/songs/:songId", deleteSongById);




module.exports = router;
