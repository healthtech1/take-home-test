import request from "supertest";
import app from "../src/app";

describe("POST /forms", () => {
	it("should return 200", async () => {
		const response = await request(app).post("/forms");
		expect(response.status).toBe(200);
	});
});
