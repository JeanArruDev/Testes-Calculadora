const { add, subtract } = require('../src/calculadora');

describe('Testes de Adição e Subtração', () => {
   
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds -1 + -1 to equal -2', () => {
        expect(add(-1, -1)).toBe(-2);
    });

   
    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('subtracts -1 - -1 to equal 0', () => {
        expect(subtract(-1, -1)).toBe(0);
    });
});
