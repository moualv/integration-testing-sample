const Frontend = require('./frontend');
const {expect} = require('chai');

describe('Frontend unit cases', () => {

    const serverStub = {
        getHouses: () => [{
            description: 'wonderful house',
            address: 'sample street'
        }]
    }

    const frontend = Frontend(serverStub);

    it('should get houses description', () => {
        return frontend.getHousesDescription()
            .then((housesInfo) => {
                expect(housesInfo).to.deep.equals(['the wonderful house is in sample street']);
            })
    })
});