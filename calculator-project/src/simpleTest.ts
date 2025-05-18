import { Operation } from "./operation";

export function calculator(
  a: number,
  b: number,
  c: Operation
): number | string {
  if (c === Operation.Add) {
    return a + b;
  } else if (c === Operation.Subtraction) {
    return a - b;
  } else if (c === Operation.Division) {
    return a / b;
  } else if (c === Operation.Modulus) {
    return a % b;
  } else {
    return "Invalid Operation";
  }
}
