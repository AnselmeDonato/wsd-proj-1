import { redirectTo } from "../utils/requestUtils.js"; 
import * as itemService from "../services/itemService.js"; 

const addItem = async (request, mappingResult) => {
	const idList = mappingResult.pathname.groups.idList;

	const formData = await request.formData(); 
	const name = formData.get("name");
	if (name != "") {
		await itemService.create(idList, name); 
	}

	return redirectTo(`/lists/${idList}`); 
}

const collectItem = async(_request, mappingResult) => {
	const idList = mappingResult.pathname.groups.idList;
	const idItem = mappingResult.pathname.groups.idItem;

	await itemService.markCollectedById(idItem); 
	return redirectTo(`/lists/${idList}`); 
}

export {addItem, collectItem}; 