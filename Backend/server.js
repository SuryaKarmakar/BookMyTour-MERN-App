const app = require("./app");

const HOST = "localhost";
const PORT = 3000;

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
