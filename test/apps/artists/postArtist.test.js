const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");


safeDescribe("#POST artists", () => {


  it("creates a new artist in the database", async () => {
    const response = await request(router)
      .post("/artists")
      .send({
        name: "Tame Impala",
        genre: "Rock"
      });

    artistIdCreated = response.body.artistId;
    expect(response.status).to.equal(201);
  });
});