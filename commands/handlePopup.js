module.exports = class HandlePopup {
	async command() {
		// Wait for potential popup about data breach and a bad password
		// to appear and accept it manually because I can't handle it with code
		await this.api.pause(8000);

		return this;
	}
};
