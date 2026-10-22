const Calculator = require('./calculator');

describe('Calculator Module - Task 1 & Task 3', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  // Task 1: multiply() tests (2 tests)
  test('multiply() correctly multiplies two positive numbers', () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test('multiply() correctly handles negative numbers', () => {
    expect(calc.multiply(-2, 5)).toBe(-10);
  });

  // Task 1: divide() tests (2 tests)
  test('divide() correctly divides two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('divide() returns floating point results correctly', () => {
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
  });

  // Task 3: TDD - Division by zero requirement
  test('divide() throws an error when dividing by zero', () => {
    expect(() => calc.divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
