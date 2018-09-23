function Adapter(server) {
    function httpGetHouses() {
        return Promise.resolve({
            body: server.getHouses()
        });
    }

    function getHouses() {
        return httpGetHouses().then((req) => req.body);
    }

    return {
        getHouses
    };
}

module.exports = Adapter;