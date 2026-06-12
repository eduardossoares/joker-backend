import { runner } from "node-pg-migrate";
import { defaultMigrationOptions } from "./consts/migration-options.const";

export class MigrationsService {
  async dryRun() {
    const pendingMigrations = await runner({
      ...defaultMigrationOptions,
      dryRun: true,
    });

    return {
      migrations: pendingMigrations,
    };
  }

  async liveRun() {
    const executedMigrations = await runner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    return {
      migrations: executedMigrations,
    };
  }
}
