const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const trackingRoutes = require("./Routes/TrackingRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Mining tracking backend is running",
    });
});

app.use("/api/tracking", trackingRoutes);

const PORT = process.env.PORT || 4000;

const mongoURI =
    process.env.DB_TYPE === "atlas"
        ? process.env.ATLAS_MONGO_URI
        : process.env.LOCAL_MONGO_URI;
if (!mongoURI) {
    console.error("MongoDB URI is missing.");
    process.exit(1);
}

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log(
            process.env.DB_TYPE === "atlas"
                ? "MongoDB Atlas connected successfully"
                : "Local MongoDB connected successfully"
        );
        console.log("Connected database:", mongoose.connection.name);
        console.log("Connected host:", mongoose.connection.host);

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });