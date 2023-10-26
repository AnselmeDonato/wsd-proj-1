import { configure } from "./deps.js"; 
import * as listController from "./controllers/listController.js"; 
import * as indexController from "./controllers/indexController.js"; 
import * as itemController from "./controllers/itemController.js"; 


configure({
	views: `${Deno.cwd()}/views/`,
}); 

const handleRequest = async (request) => {
	const url = new URL(request.url); 

	// Main page
	if (url.pathname === "/" && request.method === "GET") {
		return await indexController.viewIndex(); 
	} else if (url.pathname === "/lists" && request.method === "GET") {
		return await listController.viewLists(); 

	// All lists page
	} else if (url.pathname === "/lists" && request.method === "POST") {
		return await listController.createList(request); 
	} else if (url.pathname.match("/lists/[0-9]+/deactivate") && request.method === "POST") {
		console.log("deactivate")
		return await listController.deactivateByRequest(request); 

	// Single list page
	} else if (url.pathname.match("/lists/[0-9]+") && request.method === "GET") {
		return await listController.viewListById(request); 
	} else if (url.pathname.match("/lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
		return await itemController.collectItem(request); 
	} else if (url.pathname.match("/lists/[0-9]+/items") && request.method === "POST") {
		return await itemController.addItem(request); 
	
	// Else
	} else {
		return new Response("Not found", { status: 404 }); 
	}
};

Deno.serve(
  { port: 7777, hostname: "0.0.0.0" },
  handleRequest,
);

