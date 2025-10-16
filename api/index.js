const serverless = require('serverless-http');
const express = require("express");
const {
    get,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

const app = express();
app.use(express.json());

app.get("/", get);
app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

module.exports.handler = serverless(app);