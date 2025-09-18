import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import {router} from "./routes/indexRouter.js";
dotenv.config();
const app = express();
app.options(/.*/, cors()); 


app.use(express.json());
connectToDB();
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
const __dirname=import.meta.dirname;

app.use("/", router);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});




