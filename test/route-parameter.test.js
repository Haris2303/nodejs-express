import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:id", (req, res) => {
    const idProduct = req.params.id;
    res.send("Product id : " + idProduct);
});

app.get("/categories/:id(\\d+)", (req, res) => {
    const idCategory = req.params.id;
    res.send("Category id : " + idCategory);
});

app.get("/seller/:idSeller/products/:idProduct", (req, res) => {
    const idSeller = req.params.idSeller;
    const idProduct = req.params.idProduct;
    res.send(`Seller ${idSeller} and Product ${idProduct}`);
});

test("Test Route Parameter", async () => {
    let response = await request(app).get("/products/otong");
    expect(response.text).toBe("Product id : otong");

    response = await request(app).get("/products/salah");
    expect(response.text).toBe("Product id : salah");

    response = await request(app).get("/categories/123");
    expect(response.text).toBe("Category id : 123");

    response = await request(app).get("/categories/salah");
    expect(response.status).toBe(404);

    response = await request(app).get("/seller/ucup/products/rtx4070");
    expect(response.text).toBe("Seller ucup and Product rtx4070");
});
