const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");


safeDescribe("DELETE /artists/:artistId", () => {

     createSong({
      albumId: "1",
      name: "l'impetrarice",
      artistId: "1"
    });
  });

  it("deletes album record by artist id", async () => {
    const res = await request(router).delete(`/songs/${songIdToDelete}`);
    expect(res.status).to.equal(204);
  });
