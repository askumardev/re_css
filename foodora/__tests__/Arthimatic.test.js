import Arthimatic from "../Arthimatic";

test("Arithmetic functions should calculate the sum, subtract, and multiply of two numbers", () => {
  const { sum, subtract, multiply } = Arthimatic();

  const resultSum = sum(3, 4);
  expect(resultSum).toBe(7);

  const resultSubtract = subtract(6, 4);
  expect(resultSubtract).toBe(2);

  const resultMultiply = multiply(5, 4);
  expect(resultMultiply).toBe(20);
});