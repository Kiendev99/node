import express from "express"
import { create, get, getAll, remove, update } from "../component/project"
const router = express.Router()
router.post( "/product", creat )
router.put( "/product/:id", update )
router.get( "/product", getAll )
router.get( "/product/:id", get )
router.delete( "/product/:id", remove )


export default router