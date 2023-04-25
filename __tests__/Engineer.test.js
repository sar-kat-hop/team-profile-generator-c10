const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Tester', '404', 'test@email.com', 'testergit');

describe('Engineer', () => {
    test('can be instantiated', () => {
        expect(engineer).toBeInstanceOf(Engineer);

        console.log('ENGINEER: ' + JSON.stringify(engineer));
    });

    test('can get special info', () => {
        expect(engineer.getSpecial()).toEqual('testergit');

        console.log('ENGINEER getSpecial(): ' + JSON.stringify(engineer.getSpecial()));
    })
});