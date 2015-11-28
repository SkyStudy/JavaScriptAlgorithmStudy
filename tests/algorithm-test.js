QUnit.test("factorial", function( assert ) {
    assert.equal(Algorithm.factorial(1), 1);
    assert.equal(Algorithm.factorial(2), 2);
    assert.equal(Algorithm.factorial(3), 6);
});

QUnit.test("is prime number", function( assert ) {
    assert.equal(Algorithm.isPrimeNumber(1), true);
    assert.equal(Algorithm.isPrimeNumber(2), true);
    assert.equal(Algorithm.isPrimeNumber(3), true);

    assert.equal(Algorithm.isPrimeNumber(4), false);
    assert.equal(Algorithm.isPrimeNumber(5), true);
});

QUnit.test("get sequence sum", function (assert) {
    assert.equal(Algorithm.getSequenceSum([1, 2, 3], 1), 6);
    assert.equal(Algorithm.getSequenceSum([1, 2, 3], 2), 11);
});