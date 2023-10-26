import { sql } from "../database/database.js";

const getByListId = async (id) => {
	return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ id } ORDER BY name ASC`; 
}; 

const create = async (shopping_list_id, name) => {
	console.log("create"); 
	return await sql`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${ shopping_list_id}, ${ name })`
}; 

const markCollectedById = async (id) => {
	return await sql`UPDATE shopping_list_items SET collected = TRUE where id = ${ id }`
}; 

export { getByListId, create, markCollectedById }; 