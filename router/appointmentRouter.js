import express from 'express';
import { deleteAppointment,getAllAppointments, postAppointment, updateAppointmentStatus } from '../controller/appointementController.js';
import { isAdminAuthenticated, isPatientAuthenticated } from '../middlewares/auth.js';

const router = express.Router();
router.post("/post",postAppointment,isPatientAuthenticated);
router.get("/getall",getAllAppointments,isAdminAuthenticated);
router.put("/update/:id",isAdminAuthenticated,updateAppointmentStatus);
router.delete("/delete/:id",isAdminAuthenticated,deleteAppointment);

export default router;