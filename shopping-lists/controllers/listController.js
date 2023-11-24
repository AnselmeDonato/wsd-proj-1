import { renderFile } from "../deps.js"; 
import { redirectTo, responseDetails } from "../utils/requestUtils.js"; 
import * as listService from "../services/listService.js"; 
import * as itemService from "../services/itemService.js"; 

const viewLists = async (_request, _mappingResult) => {
	const data = {
	  lists: await listService.getAll(),
	};
	return new Response(await renderFile("lists.eta", data), responseDetails);
};

const viewListById = async(_request, mappingResult) => {
	const idList = mappingResult.pathname.groups.idList;

	const data = {
		lists: await listService.getById(idList),
		items: await itemService.getByListId(idList), 
	  };
	return new Response(await renderFile("list.eta", data), responseDetails);
}

const createList = async (request, _mappingResult) => {
	const formData = await request.formData(); 
	const name = formData.get("name");
	if (name != "") {
		await listService.create(name); 
	}

	return redirectTo("/lists"); 
}

const deactivateByRequest = async(_request, mappingResult) => {
	const idList = mappingResult.pathname.groups.idList;
	await listService.deactivateById(idList)
	return redirectTo("/lists"); 
}

export {viewLists, createList, deactivateByRequest, viewListById}; 