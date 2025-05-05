module.exports = {
	elements: {
		facilityText: "#facility",
		programText: "#program",
		visitDateText: "#visit_date",
		commentText: "#comment",
		readmissionText: "#hospital_readmission",
		menuButton: "#menu-toggle",
		logoutLink: 'a[href="authenticate.php?logout"]',
	},
	commands: [
		{
			verifyAppointmentDetails(data) {
				return this.waitForElementVisible("#summary", 5000)
					.assert.textContains("@facilityText", data.facility)
					.assert.textContains("@programText", data.program)
					.assert.textContains("@visitDateText", data.date)
					.assert.textContains("@commentText", data.comment)
					.assert.textContains(
						"@readmissionText",
						data.readmission ? "Yes" : "No"
					);
			},
			clickMenuButton() {
				return this.click("@menuButton");
			},
			clickLogout() {
				return this.click("@logoutLink");
			},
		},
	],
};
