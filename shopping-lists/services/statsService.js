import { sql } from "../database/database.js";

const nbCreatedLists = async () => {
	return await sql`SELECT COUNT(*) FROM shopping_lists`; 
}; 

const nbCreatedItems = async () => {
	return await sql`SELECT COUNT(*) FROM shopping_list_items`; 
}; 

export { nbCreatedLists, nbCreatedItems }; 