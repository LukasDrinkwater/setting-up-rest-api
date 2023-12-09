var express = require("express");
var router = express.Router();
// import { v4 as uuid } from "uuid";
const { v4: uuid } = require("uuid");
/* GET home page. */
router.get("/users", (req, res) => {
  res.send(Object.values(users));
});

router.get("/users/:userId", (req, res) => {
  res.send(Object.values(users));
});

router.get("/users", (req, res) => {
  res.send(user[req.params.userId]);
});

router.get("/messages", (req, res) => {
  res.send(Object.values(messages));
});

router.get("/messages/:messageId", (req, res) => {
  res.send(messages[req.params.messageId]);
});

router.post("/messages", (req, res, next) => {
  const id = uuid();
  const message = {
    id,
    text: req.body.text,
    userId: req.method.id,
  };
  messages[id] = message;

  res.send(message);
});

router.delete("/messages/:messageId", (req, res, next) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;
  res.send(message);
});

router.get("/session", (req, res, next) => {
  res.send(users[req.method.id]);
});
module.exports = router;

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};
