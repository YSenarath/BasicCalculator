QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, plus(2, 3), "3 + 2 is 5");
});

QUnit.test("Testing Minus function", function(assert) {
    assert.equal(3, minus(5, 2), "5 - 2 is 3");
});

QUnit.test("Testing Multiply function", function(assert) {
    assert.equal(10, multiply(5, 2), "5 * 2 is 10");
});

QUnit.test("Testing Divide  function", function(assert) {
    assert.equal(2.5, divide(5, 2), "5 / 2 is 2.5");
});

QUnit.test("Testing Divide  function", function(assert) {
    assert.equal(Infinity, divide(5, 0), "5 / 0 is infinity");
});

QUnit.test("Testing Divide  function", function(assert) {
    assert.equal(Infinity, divide(5, 0), "5 / 0 is infinity");
});
