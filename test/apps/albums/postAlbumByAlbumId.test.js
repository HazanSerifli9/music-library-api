const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");


safeDescribe("#POST Albums", () => {
  let insertedAlbumId;
  const artistId = 3;


  it("creates a new album in the database", async () => {
    const response = await request(router)
      .post(`/artists/${artistId}/album`)
      .send({
        name: "Whaaat!",
        year: 1992
      });

    insertedAlbumId = response.body.albumId;
    expect(response.status).to.equal(201);
  });
});