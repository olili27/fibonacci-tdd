/**
 * @param {number} number - A positive integer to compute a fibonacci of
 * @returns {number} The fibonacci of the given number
 */
export default function fibonacci(number) {
  if (typeof number !== "number") {
    throw new TypeError("function expects only numbers");
  }

  if (number < 0) {
    throw new RangeError("function expects only positive numbers");
  }

  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  let prev2 = 0;
  let prev1 = 1;

  // eslint-disable-next-line no-plusplus
  for (let count = 2, limit = number + 1; count < limit; count++) {
    const tempPrev2 = prev2;

    prev2 = prev1;
    prev1 = tempPrev2 + prev1;
  }

  return prev1;
}

// console.log(fibonacci(2));
