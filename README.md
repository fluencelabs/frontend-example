## About

This repository is an example of how to use Fluence javascript client and build web applications based on it. This app will be interacting with LlamaDB (SQL database written on Rust language) that was deployed in the Fluence contract.

## Usage

In `index.js` change `contractAddress`, `appId` and `tableName` if needed.

Install project:
```
npm install
```

Run webserver:
```
npm run start
```

Open browser with address:
```
http://localhost:8080/
```

Open browser console and use methods to interact with application in Fluence cluster:
```
createTable();
insert(1, "one");
insert(2, "two");
logResultAsString(getAll())
logResultAsString(getById(1))
logResultAsString(getById(2))
```