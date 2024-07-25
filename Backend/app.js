const express = require("express");

const tourRoutes = require("./routes/tourRouters");
const userRoutes = require("./routes/userRouters");

const app = express();

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => res.send("Server Is Running"));

module.exports = app;
