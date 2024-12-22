const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null'); // صحيح
      assert.isNotNull(1, '1 is not null'); // صحيح
    });
    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isUndefined(undefined, 'undefined IS undefined'); // بدل assert.isNotNull
      assert.isDefined('hello', 'A string is defined'); // بدل assert.isNull
    });
    // #3
    test('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey'); // بدل assert.isNotNull
      assert.isOk("I'm truthy", 'A string is truthy'); // بدل assert.isNull
      assert.isOk(true, 'true is truthy'); // بدل assert.isNull
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true'); // بدل assert.isNotNull
      assert.isTrue(!!'double negation', 'Double negation of a truthy value is true'); // بدل assert.isNotNull
      assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values'); // بدل assert.isNull
    });
  });

  // الباقي بنفس الطريقة مع مراجعة جميع assert.fail واختيار الدوال الصحيحة.
});
