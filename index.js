const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Travel Guru is Comming Soon");
});

app.listen(port, () => {
  console.log("Travel Guru is Running at port:", port);
});
