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

    it("fibonacci(2) should return 1", function () {
      assert.strictEqual(fibonacci(2), 1);
    });

    it("fibonacci(4) should return 3", function () {
      assert.strictEqual(fibonacci(4), 3);
    });

    it("fibonacci(13) should return 233", function () {
      assert.strictEqual(fibonacci(13), 233);
    });
  });

  describe("Non-Numeric", function () {
    it("fibonacci('tim') should throw an error `function expects only numbers`", function () {
      assert.throws(
        function () {
          fibonacci("tim");
        },
        TypeError,
        "function expects only numbers",
      );
    });

    it("fibonacci('') should throw an error `function expects only numbers`", function () {
      assert.throws(
        function () {
          fibonacci("");
        },
        TypeError,
        "function expects only numbers",
      );
    });
  });

  describe("Negative Integers", function () {
    it("fibonacci(-1) should throw an error `function expects only positive numbers`", function () {
      assert.throws(
        function () {
          fibonacci(-1);
        },
        RangeError,
        "function expects only positive numbers",
      );
    });

    it("fibonacci(-21) should throw an error `function expects only positive numbers`", function () {
      assert.throws(
        function () {
          fibonacci(-21);
        },
        RangeError,
        "function expects only positive numbers",
      );
    });
  });

  describe("Floats", function () {
    it("fibonacci(1.1) should throw an error `function expects only positive integers`", function () {
      assert.throws(
        function () {
          fibonacci(1.1);
        },
        TypeError,
        "function expects only positive integers",
      );
    });

    it("fibonacci(7.0) return 13", function () {
      assert.strictEqual(fibonacci(7.0), 13);
    });
  });
});
