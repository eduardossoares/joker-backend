import { join } from "node:path";
import { runner } from "node-pg-migrate";

export class MigrationsService {
  async dryRun() {
    const databaseUrl = process.env.DATABASE_URL || "";
    const migrations = await runner({
      dryRun: true,
      databaseUrl: databaseUrl,
      dir: join("infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
    });

    return {
      migrations: migrations,
    };
  }

  async liveRun() {
    const databaseUrl = process.env.DATABASE_URL || "";
    const migrations = await runner({
      dryRun: false,
      databaseUrl: databaseUrl,
      dir: join("infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
    });

    return {
      migrations: migrations,
    };
  }
}
