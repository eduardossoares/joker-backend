import { describe, expect, test } from "bun:test";
import { buildApp } from "src/app";

describe("GET /api/v1/migrations", () => {
  test("should return status code 200", async () => {
    const testApp = buildApp();

    const response = await testApp.inject({
      method: "GET",
      url: "/api/v1/migrations",
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).migrations).toBeArray();
  });
});
