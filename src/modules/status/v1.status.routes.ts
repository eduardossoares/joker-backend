import type { FastifyInstance } from "fastify";
import { StatusController } from "./status.controller";

export default async function statusRoutes(app: FastifyInstance) {
	const controller = new StatusController();
	app.get("/", controller.getStatus);
}
