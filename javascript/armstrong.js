// //three digit armstrong


function armstrong(num) {
  let sum = 0;
  let temp = num
  while (num !=0) {
    let digit = num % 10
    sum=sum+(digit**3)
    num=(num-digit)/10
  }
  return sum===temp
}
console.log(armstrong(123));



//four digit 

