var express = require("express");
var router = express.Router();
var path = require("path");


// router.route("/user/create")
//   .get(function (req, res) {
//     console.log("File request received");
//     res.status(200).sendFile(path.join(__dirname, "..", "public", "user", "create.html"))
//   });

// router.route("/user/create")
//   .get(getPage("user", "create.html"));


router.route("/")
  .get(function (req, res) {
      res.status(200).sendFile(path.join(__dirname, "..", "public", "index.html"))
    });

var pages = {
  student: [
    {
      path: "/student/create",
      page: "create.html"
    }, {
      path: "/student/delete",
      page: "delete.html"
    }, {
      path: "/student/login",
      page: "login.html"
    }, {
      path: "/student/update",
      page: "update.html"
    }
  ],
  faculty: [
    {
      path: "/faculty/add",
      page: "add.html"
    },
    {
      path: "/faculty/remove",
      page: "remove.html"
    },
    {
      path: "/faculty/edit",
      page: "edit.html"
    },
    {
      path: "/faculty/addSecreteWord",
      page: "addSecreteWord.html"
    },
    {
      path: "/faculty/checkAttendance",
      page: "checkAttendance.html"
    }
  ]
}

for (let key in pages) {
  let locationInfos = pages[key];
  for (let locationInfo of locationInfos) {
    router.route(locationInfo.path)
      .get(getPage(key, locationInfo.page));
  }
}

function getPage(role, page) {
  return function (req, res) {
    console.log("File request received");
    res.status(200).sendFile(path.join(__dirname, "..", "public", role, page))
  }
}

module.exports = router;
