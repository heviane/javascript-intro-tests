import Server from "./server.js";

console.log('Managing infrastructure...');

const server = Server.listen(3000)
.on("listening", () => console.log(`running at ${server.address().port}`));
