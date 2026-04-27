import { pgDatabase } from "../../../infra/db";

export class StatusService {
	pgDatabase = new pgDatabase();

	async getStatus() {
		const isRunning = await this.pgDatabase.query("SELECT 1 + 1 as count;");
		if (isRunning)
			return {
				status: "ok",
				message: "server is running!",
			};
	}
}
