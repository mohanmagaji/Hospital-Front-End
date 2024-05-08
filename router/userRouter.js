import express from "express";
import {addNewDoctor, addNewAdmin,getAllDoctors,getUserDetails,login,patientRegister, logoutAdmin } from "../controller/userController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../middlewares/auth.js";


const router = express.Router();
router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated,logoutAdmin);

export default router;