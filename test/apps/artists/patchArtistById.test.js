const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");



safeDescribe("#PATCH artist by artistId", () => {
  const artistId = 1;

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/artist/${artistId}`)
      .send({
        name: "Charlotte"
      });
    expect(response.status).to.equal(201);
    const result = await selectArtistById({ artistId });
    expect(result).to.eql([
      { artistId: 1, name: "Charlotte", genre: "Electronic" }
    ]);
  });

  it("updates artist genre by id", async () => {
    const response = await request(router)
      .patch(`/artist/${artistId}`)
      .send({
        genre: "Pop"
      });
    expect(response.status).to.equal(201);
    const result = await selectArtistById({ artistId });
    expect(result).to.eql([{ artistId: 1, name: "Charlotte", genre: "Pop" }]);
  });
});