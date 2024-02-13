const calculator = require('./calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

test('string with two numbers separated by comma should result in the sum of the numbers', () => {
    expect(calculator.add('4,5')).toBe(9);
  });
