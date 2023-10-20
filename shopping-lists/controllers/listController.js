import { renderFile } from "../deps.js"; 
import * as listService from "../services/listService.js"; 


const responseDetails = {
	headers: { "Content-Type": "text/html;charset=UTF-8"},
};

const viewLists = async () => {
	const data = {
	  lists: await listService.getAll(),
	};
	return new Response(await renderFile("lists.eta", data), responseDetails);
};

export {viewLists}; 