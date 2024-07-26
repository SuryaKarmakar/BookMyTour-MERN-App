const app = require("./app");
const mongoose = require("mongoose");

const HOST = "localhost";
const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/BookTour";

mongoose.connect(DB_URL).then(() => console.log("Database connected"));

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
