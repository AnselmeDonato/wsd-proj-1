import { postgres } from "../deps";

const sql = postgres({}); 

const findAll = async () => {
	return await sql`SELECT * FROM shopping_list_items`; 
}

export { findAll }; 