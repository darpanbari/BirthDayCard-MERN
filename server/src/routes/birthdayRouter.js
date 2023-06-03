import express from "express";
import {getAllBirthdayList} from "../controllers/birthdayController.js";

const router = express.Router();

router.get('/all-birthday-list/:fromDate/:toDate', getAllBirthdayList);


export default router;