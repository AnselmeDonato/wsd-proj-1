import { sql } from "../database/database.js";

const getAll = async () => {
	return await sql`SELECT * FROM shopping_lists`; 
}; 

const create = async (name) => {
	return await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`
}

export { getAll, create }; 
