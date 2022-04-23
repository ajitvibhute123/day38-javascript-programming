let degC_To_DegF = function(degC){
    let degF = (degC *9/5)+32;

    return degF;
}
let degF_to_DegC = function(degF){
    let degC= (degF -32)*(5/9);
    return degC;
}

let selection = parseInt(prompt("Enter what your want to do : 1- degC->degF , 2-degF->degC => "));
switch (selection){
    case 1 :
        let degC = parseInt(prompt("enter temprature -> "));
        console.log(degC_To_DegF(degC));
        break;
    case 2 :
        let degF = parseInt(prompt("Enter temprature -> "));
        console.log(degF_to_DegC(degF));
        break;
    default:
        console.log("Enter proper value please ")        
}