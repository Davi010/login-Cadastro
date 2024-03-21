import express from "express";
import { pegarUsuario } from "../controle/usuarios.js";

const rota = express.Router();

rota.get("/", pegarUsuario);

export default rota;