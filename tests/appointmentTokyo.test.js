module.exports = {
	"Make & verify appointment – Tokyo": function (browser) {
		const home = browser.page.homePage();
		const login = browser.page.loginPage();
		const appoint = browser.page.appointmentPage();
		const summary = browser.page.summaryPage();

		const data = {
			facility: "Tokyo CURA Healthcare Center",
			readmission: true,
			program: "None",
			date: "15/07/2025",
			comment: "Appointment in July",
		};

		home.navigate().clickMakeAppointment();

		login.login("John Doe", "ThisIsNotAPassword");
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
