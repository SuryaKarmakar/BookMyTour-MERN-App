const express = require("express");

const {
  getAllTours,
  getSingleTour,
  createNewTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

const router = express.Router();

router.get("/", getAllTours);

router.get("/:id", getSingleTour);

router.post("/", createNewTour);

router.patch("/:id", updateTour);

router.delete("/:id", deleteTour);

module.exports = router;
