import express from "express";
import {getJoiningDate} from "../controllers/joiningDateController.js";

const router = express.Router();

router.get('/all-joining-date/:joinnDate', getJoiningDate);


export default router;