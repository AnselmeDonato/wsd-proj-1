import { configure } from "./deps.js"; 
import * as listController from "./controllers/listController.js"; 
import * as indexController from "./controllers/indexController.js"; 
import * as itemController from "./controllers/itemController.js"; 


configure({
	views: `${Deno.cwd()}/views/`,
}); 

const urlMapping = [
	// Main page
	{
	  method: "GET",
	  pattern: new URLPattern({ pathname: "/" }),
	  fn: indexController.viewIndex,
	},

	// All lists page 
	{
	  method: "GET",
	  pattern: new URLPattern({ pathname: "/lists" }),
	  fn: listController.viewLists,
	},
	{
	  method: "POST",
	  pattern: new URLPattern({ pathname: "/lists" }),
	  fn: listController.createList,
	},
	{
		method: "POST",
		pattern: new URLPattern({ pathname: "/lists/:idList/deactivate" }),
		fn: listController.deactivateByRequest,
  },

  // Single list page
	{
		method: "GET",
		pattern: new URLPattern({ pathname: "/lists/:idList" }),
		fn: listController.viewListById,
  },
	{
		method: "POST",
		pattern: new URLPattern({ pathname: "/lists/:idList/items/:idItem/collect" }),
		fn: itemController.collectItem,
  },
	{
		method: "POST",
		pattern: new URLPattern({ pathname: "/lists/:idList/items" }),
		fn: itemController.addItem,
  },
];


const handleRequest = async (request) => {
	const mapping = urlMapping.find(
	  (um) => um.method === request.method && um.pattern.test(request.url)
	);
  
	if (!mapping) {
	  return new Response("Not found", { status: 404 });
	}
  
	const mappingResult = mapping.pattern.exec(request.url);
	try {
    return await mapping.fn(request, mappingResult);
	} catch (e) {
	  console.log(e);
	  return new Response(e.stack, { status: 500 }); 
	}
};

console.log("starting"); 
const portConfig = { port: 7777, hostname: '0.0.0.0'}; 
Deno.serve(portConfig, handleRequest);