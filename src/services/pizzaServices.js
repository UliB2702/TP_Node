import Pizza from "../models/pizza.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT TOP 2 * FROM Pizzas');

    console.log(results.recordset[0]);
}
//Cuando pones async, significa que la funcion puede ejecutarse de manera asincronica/paralelo debido a que pueden durar un tiempo, pero no sabemos cuanto. Va en la definicion de la funcion
//Cuando pones await, esperas a que llegue la llamada de una funcion asincronica para avanzar con el codigo. Va al lado de la llamada de una variable o funcion


export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');
}

export const getByID = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("whereCondition", 4).query('SELECT * FROM Pizzas WHERE Pizzas.Id LIKE @whereCondition');
}

export const create = async () =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request().input().input().input().input().query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibregluten, @pImporte, @pDescripcion)');
}

export const deleteByID = async(id) =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("whereCondition", 4).query("DELETE FROM Pizzas WHERE Pizzas.Id LIKE @whereCondition"); 
}

//const getByIDArrow = (id) => {
//    // Nuestro Codigo
//}
//
//class PizzaServices {
//
//}
