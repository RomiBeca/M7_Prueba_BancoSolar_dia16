import "dotenv/config";
import { pool } from "../database/connection.js";

export const getUsuariosModel = async () => {
  const query = {
    text: `SELECT * FROM USUARIOS`,
  };
  const { rows } = await pool.query(query);
  return rows;
};

//agregar usuarios

export const postRegistroUsuariosModel = async (usuarios) => {
  const registro = Object.values(usuarios);
  const query = {
    text: `INSERT INTO USUARIOS 
        (NOMBRE,BALANCE) 
        VALUES ($1, $2) 
        RETURNING *`,
    values: registro,
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const updateBalance = async (monto, emisor) => {
  const query = {
    text: `UPDATE USUARIOS
               SET BALANCE =
               BALANCE + $1
               WHERE NOMBRE =$2
               RETURNING *`,
    values: [monto, emisor],
  };
  const result = await pool.query(query);
  return result.rows[0];
};

//editar
export const editUsuario = async ({ id, nombre, balance }) => {
  const actualizacionUsuarios = {
    text: ` UPDATE USUARIOS 
                SET 
                NOMBRE=$1,
                BALANCE=$2
                WHERE ID =$3
                RETURNING *`,
    values: [nombre, balance, id],
  };
  const { rows } = await pool.query(actualizacionUsuarios);
  return rows[0];
};

//eliminar
export const removeUsuarios = async ({ id }) => {
  const query = {
    text: ` DELETE FROM USUARIOS
                WHERE ID =$1
                RETURNING *`,
    values: [id],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};
