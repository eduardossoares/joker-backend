import type { FastifyReply, FastifyRequest } from "fastify";
import { MigrationsService } from "./migrations.service";

export class MigrationsController {
  getMigrations(_req: FastifyRequest, res: FastifyReply) {
    const service = new MigrationsService();
    const data = service.getMigrations();
    return res.status(200).send(data);
  }
}
