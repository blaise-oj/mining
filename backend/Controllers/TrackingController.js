const Tracking = require("../Models/Tracking");

// GET all tracking records
const getAllTrackings = async (req, res) => {
  try {
    const trackings = await Tracking.find().sort({ createdAt: -1 });
    res.status(200).json(trackings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tracking records",
      error: error.message,
    });
  }
};

// GET tracking by tracking number
const getTracking = async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber.trim().toUpperCase();

    const tracking = await Tracking.findOne({ trackingNumber });

    if (!tracking) {
      return res.status(404).json({
        message: "Tracking number not found",
      });
    }

    res.status(200).json(tracking);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// CREATE tracking record
const createTracking = async (req, res) => {
  try {
    const tracking = await Tracking.create(req.body);

    res.status(201).json({
      message: "Tracking record created successfully",
      tracking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create tracking record",
      error: error.message,
    });
  }
};

// UPDATE tracking record
const updateTracking = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!tracking) {
      return res.status(404).json({
        message: "Tracking record not found",
      });
    }

    res.status(200).json({
      message: "Tracking record updated successfully",
      tracking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update tracking record",
      error: error.message,
    });
  }
};

// DELETE tracking record
const deleteTracking = async (req, res) => {
  try {
    const tracking = await Tracking.findByIdAndDelete(req.params.id);

    if (!tracking) {
      return res.status(404).json({
        message: "Tracking record not found",
      });
    }

    res.status(200).json({
      message: "Tracking record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete tracking record",
      error: error.message,
    });
  }
};

module.exports = {
  getAllTrackings,
  getTracking,
  createTracking,
  updateTracking,
  deleteTracking,
};