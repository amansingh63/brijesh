function calculater(a,b, operator){
    switch(operator){
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;
        default: return "Invalid operator";
    }
}

console.log(calculater(2,3,'+')); // 5
console.log(calculater(2,3,'-')); // -1



