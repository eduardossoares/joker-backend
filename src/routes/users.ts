import type { FastifyInstance } from "fastify";

export async function usersRoutes(server: FastifyInstance) {
	server.get("/", async () => {
		return "deu bom!";
	});
}
