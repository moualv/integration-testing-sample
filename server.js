
function Server() {
    function getHouses() {
        return [
            {
                street: 'Example street',
                number: 10,
                description: 'Fantastic house'
            }
        ]
    }
    return {
        getHouses
    };
}

module.exports = Server;