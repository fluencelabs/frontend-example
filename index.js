import * as fluence from "js-fluence-client";

// address to Fluence contract in Ethereum blockchain. Interaction with blockchain created by MetaMask or with local Ethereum node
let contractAddress = "0x45CC7B68406cCa5bc36B7b8cE6Ec537EDa67bC0B";

// application to interact with that stored in Fluence contract
let appId = "0x0000000000000000000000000000000000000000000000000000000000000002";

let fluenceSession;

// name of database in LlamaDB. Better to change this to some uniqe string
let tableName = "somerandomname";


// creates a session between client and backend application
fluence.createAppSession(contractAddress, appId).then((s) => {
		console.log("Session created");
		window.fluenceSession = s;
		fluenceSession = s;
});

// gets a result and logs it
window.logResultAsString = function (request) {
	request.result().then((r) => console.log(r.asString()))
};

// attempt to create table with `tableName` name
window.createTable = function () {
	let query = "CREATE TABLE " + tableName + " (id INT,text VARCHAR(128))";
    return fluenceSession.workerSessions[0].session
		.invoke(query)
};

// inserts values in `tableName`
window.insert = function (id, text) {
	let query = "INSERT INTO " + tableName + " VALUES(" + id + ",'" + text + "')";
	console.log(query);
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};

// get all values from `tableName`
window.getAll = function () {
	let query = "SELECT * FROM " + tableName;
    console.log(query);
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};

// get value with specific id
window.getById = function (id) {
    let query = "SELECT * FROM " + tableName + " WHERE id = " + id;
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};