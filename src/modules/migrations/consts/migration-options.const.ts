import { join } from "node:path";

const databaseUrl = process.env.DATABASE_URL || "";

export const defaultMigrationOptions = {
  databaseUrl: databaseUrl,
  dir: join("infra", "migrations"),
  direction: "up",
  migrationsTable: "pgmigrations",
} as const;
