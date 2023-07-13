const express = require("express");
const path = require("path");
const connection = require("./db.js");
const dotenv = require("dotenv");
const Routes = require("./routes/route.js");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/", Routes);

const _dirname1 = path.resolve();
// console.log(__dirname);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/user-management-client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "user-management-client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running successfully");
  });
}

const DB_URL = process.env.MONGO_URL;
connection(DB_URL);
app.listen(PORT, () => {
  console.log("server is running");
});
