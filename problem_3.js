//get all factors
function factor(x){
  var factors = [];
  rem = 0;
  for(var i = 1; i <= Math.sqrt(x); i++){
    rem = x/i;
    if(rem == Math.floor(rem)){
      factors.push(i)};
  }return factors;
}
//check if factor is prime
function prime(n){
  var i;
  for(i=2; i<n; i++){
    if(n%i==0){
      return false};
  }return true;  
}
// get prime factors

//enter number here
var allFactors = factor(600851475143);
var primeFactor=[];

allFactors.forEach(function(element){
  if (prime(element)){
   primeFactor.push(element)};
});
//arrange ascending
primeFactor.sort(function(a, b) {
  return a - b;
});
primeFactor.shift();

//console.log(primeFactor)
console.log(primeFactor[primeFactor.length-1])
