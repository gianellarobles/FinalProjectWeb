const express = require("express");
const users = require("../models/users");
const { requireUser } = require("../middleware/authorization");
const router = express.Router();

router
  .patch("/:username/:password", (req, res, next) => {
    users
      .addUser(req.params.username, req.params.password)
      .then((result) => res.status(200).send(result));
  })
  .patch("/:username", (req, res) => {
    users
      .getUser(req.params.username)
      .then((user) => res.status(200).send(user));
  })
  
  .get("/", (req, res, next) => {
    users.getAll().then((users) => res.status(200).send(users));
  })
  .get("/search", requireUser(), (req, res, next) => {
    const results = search(req.query.q);
    res.send(results);
  })
  .get("/:id", requireUser(), (req, res, next) => {
    const user = get(+req.params.id);
    res.send(user);
  })
  .post("/register", (req, res, next) => {
    /*
        {
        "name":"gianella",
        "username":"gianella363",
        "email":"gianellarobles@gmail.com",
        "password":"gianella"
        }*/
    const { name, username, email, password } = req.body;
    users.addUser(name, username, email, password).then((user) => {
        res.send(user);
        });
  })
  .post("/login", (req, res, next) => {
    users.login(req.body.username, req.body.password)
      .then((user) => {
        res.send(user);
      })
      .catch(next);
  })
  .patch("/:id", requireUser(), (req, res, next) => {
    if (req.user.id !== +req.params.id && !req.user.admin) {
      return next({
        status: 403,
        message:
          "You can only edit your own account. (Unless you are an admin)",
      });
    }
    req.body.id = +req.params.id;
    const user = update(req.body);
    res.send(user);
  })
  .delete("/:id", requireUser(true), (req, res, next) => {
    remove(+req.params.id);
    res.send({ message: "User removed" });
  }) 
  .post(`/:username`, (req, res, next) => {
    users
      .updateUser(req.body.user)
      .then((user) => res.status(200).send(user.value));
  })

module.exports = router;
