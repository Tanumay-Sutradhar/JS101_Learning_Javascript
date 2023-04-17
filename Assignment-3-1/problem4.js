// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let num=1;
let limit=100;

let sum=0; count=0;
while(num <= limit){
  if (num%2 ==0){
    sum+=num;
    count++;
  }
  num++;
}
console.log (sum/count)