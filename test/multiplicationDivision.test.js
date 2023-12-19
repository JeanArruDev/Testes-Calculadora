const { multiply, divide } = require('../src/calculadora');

describe('Testes de Multiplicação e Divisão', () => {
   
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies -1 * 2 to equal -2', () => {
        expect(multiply(-1, 2)).toBe(-2);
    });

    
    test('divides 6 / 3 to equal 2', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('divides 10 / -2 to equal -5', () => {
        expect(divide(10, -2)).toBe(-5);
    });

    test('divides 0 / 5 to equal 0', () => {
        expect(divide(0, 5)).toBe(0);
    });

    test('divides 5 / 0 to throw error', () => {
        expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
});
