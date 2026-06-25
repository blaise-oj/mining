const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema(
  {
    trackingNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true,
    },

    status: {
      type: String,
      default: "ON HOLD",
    },

    shipper: {
      name: String,
      phone: String,
      address: String,
      email: String,
    },

    receiver: {
      name: String,
      phone: String,
      address: String,
      email: String,
    },

    shipment: {
      typeOfShipment: String,
      courier: String,
      mode: String,
      paymentMode: String,
      totalFreight: String,
      carrier: String,
      carrierReferenceNo: String,
      departureTime: String,
      origin: String,
      destination: String,
      pickupDate: String,
      pickupTime: String,
      expectedDeliveryDate: String,
      comments: String,
    },

    packages: [
      {
        qty: String,
        pieceType: String,
        description: String,
        length: String,
        width: String,
        height: String,
        weight: String,
      },
    ],

    history: [
      {
        date: String,
        time: String,
        location: String,
        status: String,
        updatedBy: String,
        remarks: String,
      },
    ],

    totals: {
      volumetricWeight: String,
      volume: String,
      actualWeight: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tracking", trackingSchema);