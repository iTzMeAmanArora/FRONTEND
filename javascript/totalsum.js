
function totalsum(num){
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        sum= sum + digit
        num=(num-digit)/10
    }
    return sum
}
console.log(totalsum(345));
