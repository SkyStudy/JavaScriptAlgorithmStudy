var Algorithm = {
    factorial: function (n) {
        var result = 1;
        for (var i = 1; i <= n; ++i) {
            result *= i;
        }
        return result;
    },

    isPrimeNumber: function (number) {
        if (number === 1) return true;

        var data = {};

        for (var index = 2; index <= number; ++index) {
            data[index] = true;
        }

        for (var i = 2, maxDelimeter = Math.sqrt(number); i <= maxDelimeter; ++i) {
            if (data[i]) {
                for (var j = 2 * i; j <= number; j = j + i) {
                    if (j === number) return false;
                    data[j] = false;
                }
            }
        }

        return true;
    },

    getSequenceSum: function (multipliers, x) {

    }

};