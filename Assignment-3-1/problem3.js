// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit


let num=0;
let limit=3;

let sum=0;
while(num <= limit){
  if (num%3 ==0){
    sum+=num;
  }
  num++;
}
console.log (sum)