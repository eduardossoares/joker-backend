import { Client, type QueryConfig } from "pg";

export class pgDatabase {
  client = new Client({
    application_name: "prato-feito-backend",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.POSTGRES_SSLMODE === "verify-full",
  });

  async query(queryObject: QueryConfig | string) {
    try {
      await this.client.connect();
      const result = await this.client.query(queryObject);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      await this.client.end();
    }
  }
}
