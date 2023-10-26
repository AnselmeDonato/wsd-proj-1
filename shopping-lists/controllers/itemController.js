import { renderFile } from "../deps.js"; 
import { redirectTo, responseDetails } from "../utils/requestUtils.js"; 
import * as itemService from "../services/itemService.js"; 

const addItem = async (request) => {
	const url = new URL(request.url); 
	const urlParts = url.pathname.split("/");

	const formData = await request.formData(); 
	const name = formData.get("name");
	if (name != "") {
		await itemService.create(urlParts[2], name); 
	}

	return redirectTo(`/lists/${urlParts[2]}`); 
}

const collectItem = async(request) => {
	const url = new URL(request.url); 
	const urlParts = url.pathname.split("/"); 
	await itemService.markCollectedById(urlParts[4]); 
	return redirectTo(`/lists/${urlParts[2]}`); 
}

export {addItem, collectItem}; 