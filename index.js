import * as fluence from "js-fluence-client";

let contractAddress = "0x45CC7B68406cCa5bc36B7b8cE6Ec537EDa67bC0B";
let appId = "0x0000000000000000000000000000000000000000000000000000000000000002";

let fluenceSession;
let tableName = "somerandomname";

fluence.createAppSession(contractAddress, appId).then((s) => {
		console.log("Session created");
		window.fluenceSession = s;
		fluenceSession = s;
});

window.getResultAsString = function (request) {
	request.result().then((r) => console.log(r.asString()))
};

window.createTable = function () {
	let query = "create table " + tableName + " (id int, text varchar(128))";
    return fluenceSession.workerSessions[0].session
		.invoke(query)
};

window.insert = function (id, text) {
	let query = "insert into " + tableName + " values(" + id + ",'" + text + "')";
	console.log(query);
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};

window.getAll = function () {
	let query = "SELECT * from " + tableName;
    console.log(query);
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};

window.getById = function (id) {
    let query = "select * from " + tableName + " where id = " + id;
    return fluenceSession.workerSessions[0].session
        .invoke(query)
};