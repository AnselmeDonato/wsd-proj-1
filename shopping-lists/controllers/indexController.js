import { renderFile } from "../deps.js"; 
import { responseDetails } from "../utils/requestUtils.js"; 
import * as statsService from "../services/statsService.js"; 

const viewIndex = async (_request, _mappingResult) => {
	const data = {
		nbLists: await statsService.nbCreatedLists(), 
		nbItems: await statsService.nbCreatedItems(), 
	};
	return new Response(await renderFile("index.eta", data), responseDetails);
};

export {viewIndex}; 