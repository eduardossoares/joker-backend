import { pgDatabase } from "infra/db";
import type { QueryResult } from "pg";

export class StatusService {
  pgDatabase = new pgDatabase();

  async getStatus() {
    const rawResult = await this.pgDatabase.query(`
      SHOW server_version;
      SHOW max_connections;
      SELECT count(*) AS used_connections FROM pg_stat_activity;
    `);

    const results = rawResult as unknown as QueryResult[];

    return {
      updated_at: new Date().toISOString(),
      dependencies: {
        database: {
          version: results[0]?.rows[0].server_version,
          max_connections: results[1]?.rows[0].max_connections,
          used_connections: results[2]?.rows[0].used_connections,
        },
      },
    };
  }
}
