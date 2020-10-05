var pal = [];
for (var i=100; i<=999; i++){
  for (var b=100; b<=999; b++){
    var x = i*b;    //get products
    if (x.toString().split('').reverse('').join('') == x.toString()){     //reverse,compare, get palindromes
      pal.push(x);
    }
  }
}
pal.sort(function(a, b) {
  return a - b;
});

console.log(pal[pal.length-1]);
