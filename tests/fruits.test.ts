import { Fruit } from './../src/repositories/fruits-repository';
import app from '../src/index';
import supertest from 'supertest';
import { FruitInput } from '../src/services/fruits-service';

describe("fruits tests", () => {
    it("should create a specific fruit", async () => {
        const body: FruitInput = {
            name: "Melancia",
            price: 12.99
        }
        const result = await supertest(app).post("/fruits").send(body)
        const status = result.status
        expect(status).toBe(201)

    })
    it("should return all fruits", async () => {
        const result = await supertest(app).get("/fruits")
        const response = result.body
        expect(response.length).toBe(1)
    })
})