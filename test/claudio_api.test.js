const request = require("supertest");
const express = require("express");

const app = express();
const claudioApiRouter = require("../routes/claudio_api");

app.use("/claudio_api", claudioApiRouter);

describe("Claudio API", () => {
  // Test the root route
  it("should return a welcome message", async () => {
    console.log("Starting test for root route");
    const response = await request(app).get("/claudio_api");
    console.log("Welcome message response:", response.text);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Claudio API is working! 🚀");
    console.log("Test for root route completed");
  });

  // Test the /balances/:address route
  it("should return the balance of the given address", async () => {
    const address = "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326";
    const response = await request(app).get(`/claudio_api/balances/${address}`);
    console.log("Balance response:", response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("balance");
  });
});
