const Intern = require('../lib/Intern');
const intern = new Intern('Tester', '404', 'test@email.com', 'school');

describe('Intern', () => {
    test('can be instantiated', () => {

        expect(intern).toBeInstanceOf(Intern);

        console.log('INTERN:' + JSON.stringify(intern));
    });

    test('can get id', () => {
        expect(intern.getId()).toEqual('404');

        console.log('INTERN getId(): ' + JSON.stringify(intern.getId()));
    })
});