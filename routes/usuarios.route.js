import { Router } from "express";
import { deleteUsuarios, getUsuarios, postUsuarios, putUsuarios } from "../controllers/usuarios.controller.js";

const router = Router()

router.get('/usuarios', getUsuarios)
router.post('/usuario', postUsuarios)
router.put('/usuario', putUsuarios)
router.delete('/usuario', deleteUsuarios)


export default router