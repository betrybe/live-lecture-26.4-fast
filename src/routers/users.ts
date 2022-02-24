import { Router } from "express";
import { postUsers } from "../controllers/users";

const router = Router();

router.get("/");
router.post("/", postUsers);

export default router;
