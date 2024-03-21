import express from "express";
import userRoutes from "./api/routes/rotas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8080, () => {
    console.log("Servidor funcionando na porta 8080");
});