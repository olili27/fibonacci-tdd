/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

// timothy olili
// bridget nagasha

import { assert } from "chai";
import fibonacci from "../fibonacci.js";

describe("Fibonacci Function for Positive Integers", function () {
  describe("Zero and Positive Integers", function () {
    it("fibonacci(0) should return 0", function () {
      assert.strictEqual(fibonacci(0), 0);
    });

     it("fibonacci(1) should return 1", function () {
       assert.strictEqual(fibonacci(1), 1);
     });
  });
});
