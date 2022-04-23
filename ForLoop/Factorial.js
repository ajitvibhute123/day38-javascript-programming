//Reading input from console using prompt-sync NodeJS Module
let input = parseInt(prompt("Enter number to find factorial -> "))

if (input == 0){
    console.log("Factorial of zero = 1");    
}else if (input == 1){
    console.log(`the factorial is = ${0}`);
}
else{
    let fact = 1 ;
    for (let i = 2 ; i <= input ; i++){
        fact = fact*i;
    }
    console.log(`the factorial of ${input} is ${fact}.`);
}