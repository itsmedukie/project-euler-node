var fibo = [1,2];
var sum = 0; 
while (fibo[fibo.length-1] < 4000000){
  fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2])};
  fibo.pop(fibo[fibo.length-1]);
  console.log(fibo);

fibo.forEach(function(element){
  if (element%2==0){
    sum+=element};
    //even_num.push(element)};
});
console.log(sum);