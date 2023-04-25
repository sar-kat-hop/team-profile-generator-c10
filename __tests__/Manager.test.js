const Manager = require('../lib/Manager');
const manager = new Manager('Tester', '404', 'test@email.com', 'office');

describe('Manager', () => {
    test('can be instantiated', () => {
        expect(manager).toBeInstanceOf(Manager);

        console.log(JSON.stringify(manager));
    });

    test('can get name', () => {
        expect(manager.getName()).toEqual('Tester');

        console.log('MANAGER getName():' + JSON.stringify(manager.getName()));
    });

    test('can get email', () => {
        expect(manager.getEmail()).toEqual('test@email.com');

        console.log('MANAGER getEmail(): ' + JSON.stringify(manager.getEmail()));
    });

    test('can get role', () => {
        expect(manager.getRole()).toEqual('Manager');

        console.log('MANAGER getRole():' + JSON.stringify(manager.getRole()));
    });
});