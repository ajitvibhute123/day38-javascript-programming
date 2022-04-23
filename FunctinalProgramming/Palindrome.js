//Reading input from console using prompt-sync NodeJS Module
const input = require("prompt-sync")();

function checkPalindrome(number){
    let reversedNumber = 0;
    let temp = number;
    while(temp>0){
        let digit = temp % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        temp =  Math.floor(temp/10);
    }
}