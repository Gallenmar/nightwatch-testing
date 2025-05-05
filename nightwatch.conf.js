module.exports = {
	src_folders: ["tests"],
	page_objects_path: ["pages"],
	custom_commands_path: ["commands"],

	test_workers: {
		enabled: true,
		workers: "auto",
	},

	webdriver: {
		start_process: true,
		server_path: require("geckodriver").path,
		port: 9515,
	},

	test_settings: {
		default: {
			launch_url: "https://katalon-demo-cura.herokuapp.com",
			desiredCapabilities: {
				browserName: "firefox",
			},
			screenshots: {
				enabled: true,
				on_failure: true,
				path: "tests_output/screenshots",
			},
		},

		chrome: {
			webdriver: {
				server_path: require("chromedriver").path,
				port: 9515,
			},
			desiredCapabilities: {
				browserName: "chrome",
				"goog:chromeOptions": {
					args: ["--no-sandbox", "--disable-dev-shm-usage"],
				},
			},
		},

		firefox: {
			webdriver: {
				start_process: true,
				server_path: require("geckodriver").path,
				port: 4444,
				cli_args: ["--log", "debug"],
				log_path: "tests_output/logs",
			},
			desiredCapabilities: {
				browserName: "firefox",
				acceptInsecureCerts: true,
				marionette: true,
			},
		},
	},
};
