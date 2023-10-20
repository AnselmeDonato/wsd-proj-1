import { renderFile } from "../deps.js"; 

const responseDetails = {
	headers: { "Content-Type": "text/html;charset=UTF-8"},
};

const viewIndex = async () => {
	const data = {};
	return new Response(await renderFile("index.eta", data), responseDetails);
};

export {viewIndex}; 