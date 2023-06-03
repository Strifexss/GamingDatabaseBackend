import { Router } from "express";
import gamesController from "../controllers/gamesController";

const router = Router()

router.post("/Criargames", gamesController.index)
router.get("/receberDados", gamesController.search)
router.get("/deleteGames", gamesController.deleteGames)
router.get("/deleteSpecific", gamesController.deleteGameEspecific)
export default router