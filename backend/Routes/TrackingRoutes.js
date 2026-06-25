const express = require("express");
const {
  getAllTrackings,
  getTracking,
  createTracking,
  updateTracking,
  deleteTracking,
} = require("../Controllers/TrackingController");

const router = express.Router();

router.get("/", getAllTrackings);
router.post("/", createTracking);

router.get("/:trackingNumber", getTracking);

router.put("/:id", updateTracking);
router.delete("/:id", deleteTracking);

module.exports = router;