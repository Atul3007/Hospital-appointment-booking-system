const { AppointmentModel } = require("../models/appointment.model");
const { DepartmentModel } = require("../models/department.model");
const { DoctorModel } = require("../models/doctor.model");
const { PatientModel } = require("../models/patient.model");
const { UserModel } = require("../models/user.model");
const dashboardRouter = require("express").Router();

//!! ALL DETAILS ------------------------------->
dashboardRouter.get("/all", async (req, res) => {
  try {
    let users = await UserModel.find();
    let docs = await DoctorModel.find();
    let dept = await DepartmentModel.find();
    let appointments = await AppointmentModel.find();
    // console.log(users, docs, appointment, dept)

    let docPending = docs.filter((e) => {
      return e.status === false;
    });
    let docApproved = docs.filter((e) => {
      return e.status === true;
    });
    let appPending = appointments.filter((e) => {
      return e.status === false;
    });
    let appApproved = appointments.filter((e) => {
      return e.status === true;
    });
    res.send({
      msg: "Dashboard Done",
      docPending: docPending,
      docApproved: docApproved,
      docsTotal: docs,
      department: dept,
      usersRegistered: users,
      appPending: appPending,
      appApproved: appApproved,
      totalAppointments: appointments.length,
      totalPendingAppointments: appPending.length,
    });
  } catch (error) {
    console.log({ msg: "Error" });
  }
});

module.exports = { dashboardRouter };
