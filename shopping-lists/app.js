import { configure } from "./deps.js"; 
import * as listController from "./controllers/listController.js"; 


configure({
	views: `${Deno.cwd()}/views/`,
}); 


const handleRequest = async (request) => {
	return await listController.viewLists(); 
};

Deno.serve(
  { port: 7777, hostname: "0.0.0.0" },
  handleRequest,
);

