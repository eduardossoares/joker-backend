import type { FastifyInstance } from "fastify";
import { MigrationsController } from "./migrations.controller";

export default function migrationsRoutes(app: FastifyInstance) {
  const controller = new MigrationsController();
  app.get("/", controller.dryRun);
  app.post("/", controller.liveRun);
}
