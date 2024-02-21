import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.set({
        "X-Powered-By": "Haris2303",
        "X-Author": "Haris",
    });
    res.send("Hello Response Header");
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");

    expect(response.text).toBe("Hello Response Header");
    expect(response.get("X-Powered-By")).toBe("Haris2303");
    expect(response.get("X-Author")).toBe("Haris");
});
