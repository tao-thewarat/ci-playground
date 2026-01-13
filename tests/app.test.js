const { sum, multiply } = require('../app')

test('adds two numbers correctly', () => {
  expect(sum(1, 2)).toBe(3)
})

test('multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6)
})
