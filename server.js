import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import {router} from "./routes/indexRouter.js";
dotenv.config();
const app = express();
app.use(cors());
app.options(/.*/, cors()); 
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.sendStatus(200); // ✅ not 204
  }
  next();
});

app.use(express.json());
connectToDB();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
const __dirname=import.meta.dirname;

app.use("/", router);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});





