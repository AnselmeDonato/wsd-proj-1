import { sql } from "../database/database.js";

const findAll = async () => {
	return await sql`SELECT * FROM shopping_list_items`; 
}; 

export { findAll }; 