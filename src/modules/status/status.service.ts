export class StatusService {
	async getStatus() {
		return {
			status: "ok",
			message: "server is running!",
		};
	}
}
