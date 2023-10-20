import { configure } from "./deps.js"; 
import * as listController from "./controllers/listController.js"; 
import * as indexController from "./controllers/indexController.js"; 


configure({
	views: `${Deno.cwd()}/views/`,
}); 

const handleRequest = async (request) => {
	const url = new URL(request.url); 

	if (url.pathname === "/" && request.method === "GET") {
		return await indexController.viewIndex(); 
	} else if (url.pathname === "/lists" && request.method === "GET") {
		return await listController.viewLists(); 
	} else {
		return new Response("Not found", { status: 404 }); 
	}
};

Deno.serve(
  { port: 7777, hostname: "0.0.0.0" },
  handleRequest,
);

