import express from "express";
import tryCatch from "../utils/tryCatch.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
	getAllFeedbacks,
	addNewFeedback,
	getCustomersFeedbacksByEmail,
	getBusinessesFeedbacksByEmail,
} from "../controllers/feedbacks.controller.js";

const router = express.Router();

// Get All Feedbacks
router.get("/", tryCatch(getAllFeedbacks));

// Get Customers Feedbacks by Email
router.get("/:email", tryCatch(getCustomersFeedbacksByEmail));

// Get Businesses Feedbacks by Email
// router.get("/:email", getBusinessesFeedbacksByEmail);

// Add New Feedback
router.post("/", tryCatch(addNewFeedback));

export default router;
