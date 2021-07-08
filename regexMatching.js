   /*Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'
   The matching should cover the entire input string (not partial). */
    var isMatch = function(s, p) {
        let pattern = new RegExp("^" + p + "$", "g");
        let matches = [...s.matchAll(pattern)]; 
        return (matches.length === 1) ? true : false;
    };

// console.log(isMatch("aa", "a*")); Expected output: true