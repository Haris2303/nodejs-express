import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sample.txt");
    console.info(__dirname);
});

test("Test Response", async () => {
    const response = await request(app).get("/");
    expect(response.text).toContain("This is sample text");
});
