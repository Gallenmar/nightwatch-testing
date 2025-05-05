module.exports = {
	elements: {
		makeAppointmentBtn: "#btn-make-appointment",
		menuToggle: "#menu-toggle",
		loginLink: 'a[href="profile.php#login"]',
		homeLink: 'a[href="./"]',
		historyLink: 'a[href="history.php#history"]',
	},
	commands: [
		{
			clickMakeAppointment() {
				return this.click("@makeAppointmentBtn");
			},
			clickMenuToggle() {
				return this.click("@menuToggle");
			},
			navigateToLogin() {
				this.clickMenuToggle();
				return this.click("@loginLink");
			},
			navigateToHistory() {
				this.clickMenuToggle();
				return this.click("@historyLink");
			},
			checkHistoryTabExists() {
				this.clickMenuToggle();
				this.waitForElementVisible("@historyLink", 5000);
				this.api.assert.elementPresent(
					"@historyLink",
					"✔ History tab exists in the sidebar"
				);
				return this;
			},
			checkHistoryTabNotExists() {
				this.clickMenuToggle();
				this.expect
					.element("@historyLink")
					.to.not.be.present.before(
						5000,
						"✔ History tab is not present in the sidebar"
					);

				return this;
			},
		},
	],
};
