module.exports = {
	"Make & verify appointment – Seoul": function (browser) {
		const home = browser.page.homePage();
		const login = browser.page.loginPage();
		const appoint = browser.page.appointmentPage();
		const summary = browser.page.summaryPage();

		const data = {
			facility: "Seoul CURA Healthcare Center",
			readmission: true,
			program: "Medicaid",
			date: "02/06/2025",
			comment: "This is a test appointment",
		};

		home.navigate().clickMakeAppointment();

		login
			.waitForElementVisible("@usernameInput", 5000)
			.login("John Doe", "ThisIsNotAPassword");
		browser.handlePopup();

		appoint.makeAppointment(data);

		summary
			.waitForElementVisible("#summary", 5000)
			.verifyAppointmentDetails(data)
			.clickMenuButton()
			.clickLogout();

		home.checkHistoryTabNotExists();
		browser.end();
	},
};
