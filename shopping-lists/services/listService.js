import { sql } from "../database/database.js";

const getAll = async () => {
	return await sql`SELECT * FROM shopping_lists WHERE active`
}; 

const getById = async (id) => {
	return await sql`SELECT * FROM shopping_lists WHERE id = ${ id }`
}

const create = async (name) => {
	return await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`
}

const deactivateById = async (id) => {
	return await sql`UPDATE shopping_lists SET active = FALSE where id = ${ id }`
}

export { getAll, create, deactivateById, getById }; 
