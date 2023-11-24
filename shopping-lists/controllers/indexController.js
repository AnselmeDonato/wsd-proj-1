import { renderFile } from "../deps.js"; 
import { responseDetails } from "../utils/requestUtils.js"; 

const viewIndex = async (_request, _mappingResult) => {
	const data = {};
	return new Response(await renderFile("index.eta", data), responseDetails);
};

export {viewIndex}; 