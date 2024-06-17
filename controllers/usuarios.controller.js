import {
  editUsuario,
  getUsuariosModel,
  postRegistroUsuariosModel,
  removeUsuarios,
} from "../models/usuarios.model.js";
import { handleError } from "../database/errors.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await getUsuariosModel();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const postUsuarios = async (req, res) => {
  const { nombre, balance } = req.body;
  try {
    const newUsuario = {
      nombre,
      balance,
    };
    const crearUsuario = await postRegistroUsuariosModel(newUsuario);
    return res.json(crearUsuario);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const putUsuarios = async (req, res) => {
  const { id } = req.query;
  const { nombre, balance } = req.body;
  const usuarios = { id, nombre, balance };
  try {
    const usuario = await editUsuario(usuarios);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const deleteUsuarios = async (req, res) => {
  const { id } = req.query;
  try {
    const usuario = await removeUsuarios({ id });
    console.log(`El usuario eliminado es el id: ${usuario.id}`);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};
