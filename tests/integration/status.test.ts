import { describe, expect, test } from "bun:test";
import { buildApp } from "../../src/app";

describe("GET /api/v1/status", () => {
	test("should return server status", async () => {
		const testApp = buildApp();

		const res = await testApp.inject({
			method: "GET",
			url: "/api/v1/status",
		});

		expect(res.statusCode).toBe(200);

		expect(JSON.parse(res.body)).toEqual({
			status: "ok",
			message: "server is running!",
		});

		await testApp.close();
	});
});
