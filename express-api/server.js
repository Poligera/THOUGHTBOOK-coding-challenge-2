const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors("*"));
app.use(express.json());

const authRoutes = require("./controllers/auth");
const userRoutes = require("./controllers/users");
const postRoutes = require("./controllers/posts");
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => res.json({ message: "Welcome" }));

module.exports = app;
