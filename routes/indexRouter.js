import { Router } from "express";
export const router=new Router();
import { shortner } from "../controllers/shortner.js";
import { redirect } from "../controllers/shortner.js"; 
router.get("/:id", redirect)
router.post("/", shortner);