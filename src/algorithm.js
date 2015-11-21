var Algorithm = {
    factorial: function (n) {
        var result = 1;
        for (var i = 1; i <= n; ++i) {
            result *= i;
        }
        return result;
    },

    isPrimeNumber: function (number) {
        if (number <= 3) return true;

        if (number % 2 === 0) return false;

        return true;
    }

};