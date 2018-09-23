const Server = require('./server');
const Frontend = require('./frontend');
const server = Server();
const frontend = Frontend(server);

frontend.getHousesDescription().then(console.log);