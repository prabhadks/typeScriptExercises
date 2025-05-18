import { calculator } from "../src/simpleTest";
import { Operation } from "../src/operation";

describe("Test Calculator function", () => {
  test("Test Add Functionality with valid values", () => {
    expect(calculator(5, 3, Operation.Add)).toBe(8);
  });

  test("Test Subtract Functionality with valid values", () => {
    expect(calculator(5, 3, Operation.Subtraction)).toBe(2);
  });

  test("Test Division Functionality with valid values", () => {
    expect(calculator(20, 10, Operation.Division)).toBe(2);
  });

  test("Test Modulo Functionality with valid values", () => {
    expect(calculator(18, 5, Operation.Modulus)).toBe(3);
  });
});
