QUnit.test("factorial", function( assert ) {
    assert.equal(Algorithm.factorial(1), 1);
    assert.equal(Algorithm.factorial(2), 2);
    assert.equal(Algorithm.factorial(3), 6);
});