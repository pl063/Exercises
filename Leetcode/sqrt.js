/*Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5. */

    function sqrt(a) {
        var x,
            x1 = a / 2;
            
        do {
            x = x1;
            x1 = (x + (a / x)) / 2;
        } while (x !== x1);
        return x;
    }

    console.log(Math.log(25))