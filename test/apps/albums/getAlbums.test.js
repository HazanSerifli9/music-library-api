const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET albums", () => {
  before(async () => {});

  it("should select all albums list", async () => {
    const res = await request(router)
      .get(`/albums`)
      .send();

    expect(res.statusCode).to.equal(201);
    }};