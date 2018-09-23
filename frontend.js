const Adapter = require('./adapter');

module.exports = function Frontend(server) {
    const adapter = Adapter(server);

    function getHousesDescription() {
        return adapter.getHouses().then((houses) => houses.map((house) => `the ${house.description} is in ${house.address}`));
    }
    return {
        getHousesDescription
    };
}