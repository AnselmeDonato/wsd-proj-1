import { sql } from "../database/database.js";

const getAll = async () => {
	return await sql`SELECT * FROM shopping_lists`; 
}; 

export { getAll }; 