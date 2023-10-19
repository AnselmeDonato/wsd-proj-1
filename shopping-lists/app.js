import { 
	configure, renderFile 
} from "./deps.js";

configure({
	views: `${Deno.cwd()}/views/`,
}); 

const responseDetails = {
	headers: { "Content-Type": "text/html;charset=UTF-8"},
}; 

const data = {}; 

const handleRequest = async (request) => {
	return new Response(await renderFile("index.eta", data), responseDetails);
};

Deno.serve(
  { port: 7777, hostname: "0.0.0.0" },
  handleRequest,
);
