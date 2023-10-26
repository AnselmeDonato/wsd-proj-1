import { renderFile } from "../deps.js"; 
import { redirectTo, responseDetails } from "../utils/requestUtils.js"; 
import * as listService from "../services/listService.js"; 
import * as itemService from "../services/itemService.js"; 

const viewLists = async () => {
	const data = {
	  lists: await listService.getAll(),
	};
	return new Response(await renderFile("lists.eta", data), responseDetails);
};

const viewListById = async(request) => {
	const url = new URL(request.url); 
	const urlParts = url.pathname.split("/");

	const data = {
		lists: await listService.getById(urlParts[2]),
		items: await itemService.getByListId(urlParts[2]), 
	  };
	return new Response(await renderFile("list.eta", data), responseDetails);
}

const createList = async (request) => {
	const formData = await request.formData(); 
	const name = formData.get("name");
	if (name != "") {
		await listService.create(name); 
	}

	return redirectTo("/lists"); 
}

const deactivateByRequest = async(request) => {
	const url = new URL(request.url); 
	const urlParts = url.pathname.split("/"); 
	await listService.deactivateById(urlParts[2])
	return redirectTo("/lists"); 
}

export {viewLists, createList, deactivateByRequest, viewListById}; 