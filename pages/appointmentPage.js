module.exports = {
	elements: {
		facilitySelect: "#combo_facility",
		hospitalReadmission: "#chk_hospotal_readmission",
		medicareProgramRadio: "#radio_program_medicare",
		medicaidProgramRadio: "#radio_program_medicaid",
		noneProgramRadio: "#radio_program_none",
		visitDateInput: "#txt_visit_date",
		commentTextarea: "#txt_comment",
		bookAppointmentBtn: "#btn-book-appointment",
	},
	commands: [
		{
			selectFacility(facility) {
				return this.click("@facilitySelect").click(
					`option[value="${facility}"]`
				);
			},
			checkHospitalReadmission() {
				return this.click("@hospitalReadmission");
			},
			selectHealthcareProgram(program) {
				switch (program) {
					case "Medicare":
						return this.click("@medicareProgramRadio").pause(100);
					case "Medicaid":
						return this.click("@medicaidProgramRadio").pause(100);
					case "None":
						return this.click("@noneProgramRadio").pause(100);
					default:
						throw new Error(`Invalid healthcare program: ${program}`);
				}
			},
			setVisitDate(date) {
				return this.clearValue("@visitDateInput")
					.setValue("@visitDateInput", date)
					.sendKeys("@visitDateInput", this.api.Keys.ENTER);
			},
			setComment(comment) {
				return this.setValue("@commentTextarea", comment);
			},
			bookAppointment() {
				return this.click("@bookAppointmentBtn");
			},
			makeAppointment(data) {
				this.selectFacility(data.facility).pause(500);

				if (data.readmission) {
					this.checkHospitalReadmission();
				}

				this.selectHealthcareProgram(data.program)
					.setVisitDate(data.date)
					.setComment(data.comment)
					.bookAppointment();

				return this;
			},
		},
	],
};
