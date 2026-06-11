import { describe, expect, test } from "bun:test";
import { buildApp } from "src/app";

describe("POST /api/v1/migrations", () => {
  test("should execute live run of migrations", async () => {
    const testApp = buildApp();

    const response = await testApp.inject({
      method: "POST",
      path: "/api/v1/migrations",
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).migrations).toBeArray();
  });
});
