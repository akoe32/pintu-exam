const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const restrictOrigin = require("./middlewares/restrictOrigin");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(restrictOrigin);

app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  return res.send({
    status: "Server is up and running",
  });
});
app.post("/ping", (req, res) => {
  return res.send({
    status: "Pong Together!!",
  });
});

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
