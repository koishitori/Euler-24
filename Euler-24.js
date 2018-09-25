var nums=[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var number = 1000000 - 1;
var answer=0;
for( var i = 9; i; i--){
  var divider = 1;
  for(var j = i; j; j--)
    divider *= j;
  var temp = number % divider;
  var output = ( number - temp ) / divider;
  number = temp;
  answer = answer * 10 + nums[ output ];
  console.log( output + ":" + nums[ output ] + ":" +nums.join(",") );
  nums = nums.filter( num => num != nums[ output ] );
}
answer= answer * 10 + nums[ 0 ];
