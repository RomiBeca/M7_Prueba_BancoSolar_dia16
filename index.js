import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routerUsuarios from "./routes/usuarios.route.js";
//importar transferencias.router.js

const app = express();

const __dirname = import.meta.dirname;

// habilitar cors público
app.use(cors());

// habilitar el req.body tanto de json como formularios html

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routerUsuarios);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
