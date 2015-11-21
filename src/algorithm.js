var Algorithm = {
    factorial: function (n) {
        var result = 1;
        for (var i = 1; i <= n; ++i) {
            result *= i;
        }
        return result;
    },

    isPrimeNumber: function (number) {
        var data = {
            1: true
        };

        for (var k = 2; k <= number; ++k) {
            data[k] = true;
        }

        for (var i = 2, limit = Math.sqrt(number); i <= limit; ++i) {
            if (data[i]) {
                for (var j = 2 * i; j <= number; j = j + i) {
                    data[j] = false;
                }
            }
        }

        return data[number];
    }

};