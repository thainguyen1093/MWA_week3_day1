var express = require("express");
var router = require("./routes");
var path = require("path");

var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/file", router);

app.listen(port, () => {
  console.log("connected to server at port " + port)
})


