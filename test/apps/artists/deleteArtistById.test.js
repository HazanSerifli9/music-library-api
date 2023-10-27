const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");


safeDescribe("DELETE /artists/:artistId", () => {

  it("deletes artist record by id", async () => {
    const res = await request(router).delete(`/artists/${artistIdToDelete}`);
    expect(res.status).to.equal(204);
  });
});