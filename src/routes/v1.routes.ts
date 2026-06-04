import type { FastifyInstance } from "fastify";
import statusRoutes from "src/modules/status/v1.status.routes";

export default async function v1Routes(app: FastifyInstance) {
  app.register(statusRoutes, { prefix: "/status" });
}
