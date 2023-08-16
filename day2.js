let a = prompt("Enter first number");
let b = prompt("Enter second number");
if(!isNaN(a) && !isNaN(b)){
    alert( Number(a)+ Number(b));
}else{
    alert("Input valid number");
}