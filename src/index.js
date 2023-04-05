import Pizza from "./models/pizza.js";
import  { get2Pizzas, getAll, getByID, deleteByID } from "./services/pizzaServices.js";
// ./ significa en el directorio que estoy parado, ../ significa la carpeta anterior

await get2Pizzas();

//await getAll();

//await getByID();

//await deleteByID(10);