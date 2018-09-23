const Server = require('./server');
const Adapter = require('./adapter');
const {expect} = require('chai');

describe('adapter integration', () => {
    const server = Server();
    const adapter = Adapter(server);
    it('must retrieve houses info', () => {
        return adapter.getHouses()
            .then((houses) => {
                expect(houses.length).to.equals(1);
                const house = houses[0];
                expect(house.address).to.equals('Example street, 10');
                expect(house.description).to.equals('Fantastic house');
            });
    });
});