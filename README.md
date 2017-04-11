# Luhn
repository demonstrates the algorithm for validating a credit card number

Luhn validation algorithm for a 16 digit number simulating a credit card number.


1. Doubles the value of every second digit beginning from the right. For example [1,2,7,4] becomes [2,2,14,4].

2. Takes Sum all the digits. For example, [2,2,14,4] becomes 2+2+1+4+4 = 13

3. Calculates the remainder when the sum is divided by 10. 

For the above example, the remainder would be 3.

4. If the result equals 0, the credit card number is valid, otherwise invalid.
