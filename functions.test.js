const { capitalize, reverseString, add, subtract, divide, multiply, caeserCipher, analyzeArray } = require('./functions');

test('capitalize', () => {
  expect(capitalize('string')).toBe('String');
})

test('reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
})

test('calculator', () => {
  expect(add(1, 2)).toBe(3);
  expect(subtract(3, 2)).toBe(1);
  expect(divide(3, 2)).toBe(1.5);
  expect(multiply(1.5, 2)).toBe(3);
})

test('Caeser Cipher', () => {
  expect(caeserCipher('julius caesar')).toBe('whyvhf pnrfne');
})

test('analyze array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})