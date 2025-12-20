function evensum(num){
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    if(digit%2==0){ 
    sum = sum + digit;
    }
    num = (num - digit) / 10;
  }
  return sum
}
console.log(evensum(1325));
