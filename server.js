
function Server() {
    function getHouses() {
        return [
            {
                address: 'Example street, 10',
                description: 'Fantastic house'
            }
        ]
    }
    return {
        getHouses
    };
}

module.exports = Server;