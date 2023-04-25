const Employee = require('../lib/Employee');

describe('Employee', () => {
    test('can be instantiated', () => {
        const employee = new Employee('Tester', '404', 'test@email.com');

        expect(employee).toBeInstanceOf(Employee);
        console.log('EMPLOYEE: ' + JSON.stringify(employee));
    });
});