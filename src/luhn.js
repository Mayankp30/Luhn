"use strict";
module.exports = (function () {
	/*
     * checkCreditCard - checks different conditions to verify if a credit card number is valid or not
     * @params  - {string} - s  
     * returns true if satisfies conditions, otherwise false
     */
    function checkCreditCard(s) {
        var i, n, c, r, t;
        // First, reverse the string and remove any non-numeric characters.
        r = "";
        for (i = 0; i < s.length; i++) {
            c = parseInt(s.charAt(i), 10);
            if (c >= 0 && c <= 9) {
                r = c + r;
            }
        }
        // Check for a bad string
        if (r.length <= 1) {
            return false;
        }

        // Double the value of every second digit beginning from the right
        t = "";
        for (i = 0; i < r.length; i++) {
            c = parseInt(r.charAt(i), 10);
            if (i % 2 !== 0) {
                c *= 2;
            }
            t = t + c;
        }

        // Sum all the digits
        n = 0;
        for (i = 0; i < t.length; i++) {
            c = parseInt(t.charAt(i), 10);
            n = n + c;
        }

        // Reminder when the sum is divided by 10 results in 0, then credit card number is valid
        if (n !== 0 && n % 10 === 0) {
            return true;
        } else {
            return false;
        }
    }

    /*
     * validateForm - displays the result to check Credit Card Number
     * alerts Valid if credit card number is valid, otherwise Invalid
     */
    function validateForm() {
        var s = $("#cnumber").val();
        if (s === "" || s === null || isNaN(s)) {
            return;
        }

        if (checkCreditCard(s)) {
            alert("VALID");
        } else {
            alert("INVALID");
        }
    }

    return {
        validateForm: validateForm,
        checkCreditCard: checkCreditCard
    };
}());