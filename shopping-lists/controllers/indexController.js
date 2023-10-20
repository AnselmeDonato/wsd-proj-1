import { renderFile } from "../deps.js"; 
import { responseDetails } from "../utils/requestUtils.js"; 

const viewIndex = async () => {
	const data = {};
	return new Response(await renderFile("index.eta", data), responseDetails);
};

export {viewIndex}; 