const express = require("express");

const app = express();

const PORT = 3000;

// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "ShopSphere Backend is running"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
