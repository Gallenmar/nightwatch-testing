module.exports = {
	elements: {
		usernameInput: "#txt-username",
		passwordInput: "#txt-password",
		loginButton: "#btn-login",
		errorMessage: "p.lead.text-danger",
	},
	commands: [
		{
			login(username, password) {
				return this.setValue("@usernameInput", username)
					.setValue("@passwordInput", password)
					.click("@loginButton");
			},
			getErrorMessage() {
				return this.getText("@errorMessage");
			},
		},
	],
};
