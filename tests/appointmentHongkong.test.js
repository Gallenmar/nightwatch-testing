module.exports = {
	"Make & verify appointment – Hongkong": function (browser) {
		const home = browser.page.homePage();
		const login = browser.page.loginPage();
		const appoint = browser.page.appointmentPage();
		const summary = browser.page.summaryPage();

		const data = {
			facility: "Hongkong CURA Healthcare Center",
			readmission: false,
			program: "Medicare",
			date: "01/01/2026",
			comment: "Appointment in 2026",
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
