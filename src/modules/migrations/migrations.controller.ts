import type { FastifyReply, FastifyRequest } from "fastify";
import { MigrationsService } from "./migrations.service";

export class MigrationsController {
  async dryRun(_req: FastifyRequest, res: FastifyReply) {
    const service = new MigrationsService();
    const data = await service.dryRun();
    return res.status(200).send(data);
  }

  async liveRun(_req: FastifyRequest, res: FastifyReply) {
    const service = new MigrationsService();
    const data = await service.liveRun();
    return res.status(200).send(data);
  }
}
