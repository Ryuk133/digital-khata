import express from "express";
import { getMessage } from "../controllers/controllers.js"
const route = express.Router();
route.get("/", (req,res) => {
    res.send("Welcome to Ramesh Kaka's Digital Counter🛒");
});

export default route;