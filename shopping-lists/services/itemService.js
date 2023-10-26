import { sql } from "../database/database.js";

const getByListId = async (id) => {
	return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ id }`; 
}; 

const create = async (shopping_list_id, name) => {
	return await sql`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${ shopping_list_id}, ${ name })`
}

export { getByListId, create }; 