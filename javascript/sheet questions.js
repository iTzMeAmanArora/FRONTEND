// 1. What is the output?  - output=22
// let a = 10;
// let b = ++a + a++;
// console.log(b);


// 2. Predict the output:  - output=12
// let x = 5;
// console.log(x++ + ++x);

// 3. What will be printed?- output=34
// let a = 10;
// console.log(a++ + ++a + a);


// 4. Find the output: - Output= 11 20
// let x = 10;
// let y = x++ * 2;
// console.log(x, y);

// 5. Output?  -  output =8
// let a = 5;
// let b = a-- + --a;
// console.log(b);


// 6. What is the result? - Output=103
// console.log(10 + "5" - 2);


// 7. Output? - Output= 7
// console.log("10" - "5" + 2);

// 8. Output?- Output=11
// console.log("5" * "2" + 1);

// 9. Output? - Output= false
// console.log(10 > 5 > 2);

// 10. Output?- Output=true
// console.log(10 == "10");

// 11. Output? - Output= false
// console.log(10 === "10");

// 12. What will this print?
// console.log(true + false);

// 13. Output?
// console.log(false == 0);

// 14. Output?
// console.log(null == undefined);

// 15. Output?
// console.log(5 & 1);

// 16. Output?
// console.log(5 | 1);

// 17. Output?
// console.log(5 ^ 1);

// 18. Output?
// console.log(2 << 3);

// 19. Output?
// console.log(16 >> 2);

// 20. Output?  - Output= 15
// let a = 10;
// a += a -= 5;
// console.log(a);

// 21. Output?  - Output= true
// console.log(!!"hello");

// 22. Output?   - Output= true
// console.log(!"");

// 23. Output?   - Output= 0
// console.log(5 && 0 && 10);

// 24. Output?   - Output= JS
// console.log(0 || "" || "JS");

// 25. Output?   - Output= string
// console.log(typeof (5 + "5"));



// 26. Check if a number is positive, negative, or zero. 
// let a= -16
// if(a==0){
//     console.log("a is equals to zero.");
// }
// else if(a>0){
//     console.log("a is positive number.");
// }
// else{
//     console.log("a is negative number.");
    
// }




// 27. Check if a number is even or odd (no % operator).
// let num = 10;

// if (Math.floor(num / 2) * 2 === num) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }



// 28. Find the largest of 2 numbers.
// let a=40;
// let b=20;
// if(a>b){
//     console.log("a is greater than b");
// }
// else{
//     console.log("b is greater than a");
// }


// 29. Find the largest of 3 numbers using if–else.
// let a=10;
// let b=20;
// let c=30;
// if(a>b && a>c){
//     console.log("a is greater ");
// }
// else if(b>c && b>a){
//     console.log("b is greater ");
// }
// else {
//     console.log("c is greater ");
    
// }



// 30. Check if a year is a leap year.
// let year = 2026;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }


// 31. Check if a character is a vowel or consonant.
// let char="M"
// if( char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u" || char=="A"|| char=="E"|| char=="I"|| char=="O"|| char=="U" ){
//     console.log("char is vowel");
// }
// else{
//     console.log("char is constant");
// }


// 32. Check if a character is uppercase or lowercase.
// let ch = "J";

// if (ch >= "A" && ch <= "Z") {
//   console.log("Uppercase");
// } else if (ch >= "a" && ch <= "z") {
//   console.log("Lowercase");
// } else {
//   console.log("Not an alphabet");
// }

//33. Check if a number is divisible by 3 and 5.
// let a="15"
// if(a%3==0 && a%5==0){
//     console.log("number is divisible by 3 and 5.");
// }
// else{
//     console.log("number is not divisible.");
// }


//34. check if number is prime (no array)
// let a=5;
// let count=0;
// for(let i=2;i<a;i++){
//     if(a%i==0 ){
//         count++;
//     }
// }
// if(count>0){
//     console.log("number is not prime");
    
// }else{
// console.log("number is prime");
// }

// 35. Check if a number is palindrome.
// let num = 12321;
// let temp = num;
// let rev = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   rev = rev * 10 + digit;
//   temp = (temp-digit) / 10;
// }
// if (num === rev) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }



// 36. Check if a string is empty or not.
// let a="Aman";
// if (a.length==0){
//   console.log("string is empty");
// }
// else{
//   console.log("string is not empty");
// }



// 37. Check if a string length is greater than 10.
// let a="Aman ArOrA"
// if(a.length>10){
//   console.log("string length is greater than 10");
// }
// else{
//   console.log("string length is lower than 10");
// }



// 38. Convert marks into grade using if-else.
// let marks = 85;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 80) {
//   console.log("Grade B");
// } else if (marks >= 70) {
//   console.log("Grade C");
// } else if (marks >= 60) {
//   console.log("Grade D");
// } else if (marks >= 50) {
//   console.log("Grade E");
// } else {
//   console.log("Fail");
// }



// 39. Check if a number lies between 10 and 50.
// let a=15;
// if(a>=10 && a<=50){
//   console.log("number lies between 10 to 50");
// }
// else{
//   console.log("number dont lies between 10 to 50");
// }


// 40. Check if a character is a digit or alphabet.
// let a = "a";
// if ((a >= "A" && a <= "Z") || (a >= "a" && a <= "z")) {
//   console.log("Given character is an alphabet");
// } else if (a >= "0" && a <= "9") {
//   console.log("Given character is a digit");
// } else {
//   console.log("Not an alphabet or digit");
// }


// 43. Check if the string starts with a vowel.
// let a="_AMAN";
//   if( a[0]=='a'||a[0]=='e'||a[0]=='i'||a[0]=='o'||a[0]=='u'||a[0]=='A'||a[0]=='E'||a[0]=='I'||a[0]=='O'||a[0]=='U' ){
//     console.log("string starts with vowel");
//   }
//   else{
//     console.log("string don't start with vowel");
//   }
  

// // 44. Check if the string ends with a consonant.
// let a="_AMANa";
// let b=a.length-1;
//   if( a[b]=='a'||a[b]=='e'||a[b]=='i'||a[b]=='o'||a[b]=='u'||a[b]=='A'||a[b]=='E'||a[b]=='I'||a[b]=='O'||a[b]=='U' ){
//     console.log("string end with vowel");
//   }
//   else{
//     console.log("string end with consonant");
//   }
  

// 51. Print numbers from 1 to 10.
// for(let i=1;i<=10;i++){
//   console.log(i);
// }


// 52. Print numbers from 10 to 1.
// for(let i=10;i>=1;i--){
//   console.log(i);
// }



// 53. Print even numbers 1–50.
// for(let i=1;i<=50;i++){
//   if(i%2==0){
//   console.log(i);
//   }
// }


// // 56. Print factorial of a number.
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }

// console.log("Factorial is:", fact);


// 57. Find the sum of digits of a number.
// let num = 1597;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum = sum + digit;
//   num = (num -digit)/ 10;
// }
// console.log("Sum of digits:", sum);



// 58. Reverse a number using a loop.
// let num = 1234;
// let rev = 0;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = (num -digit)/ 10;
// }
// console.log("Reversed number:", rev);



