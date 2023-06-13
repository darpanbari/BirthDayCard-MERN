import express from "express";
import {getAllBirthdayList, loginController} from "../controllers/birthdayController.js";

const router = express.Router();

router.get('/all-birthday-list/:fromDate/:toDate', getAllBirthdayList);

router.post("/login", loginController);

export default router;