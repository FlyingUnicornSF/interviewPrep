function addStrings(num1, num2){
  let output = "";
  let num1Int;
  let num2Int;
  let carryOver = 0;
  let maxLength = num1.length > num2.length ? num1.length : num2.length;
  let num = 0;
  
  for ( i = 0; i < maxLength; i++){
    if( i < num1.length ) {
      num1Int = parseInt(num1[num1.length - 1 - i])
      console.log("num1Int", num1Int)
    }
    if (i < num2.length ) {
      num2Int = parseInt(num2[num2.length - 1 - i])
      console.log("num2Int", num2Int)
    }
    if( (num1Int + num2Int + carryOver) > 10){
      console.log("more than 10", (num1Int + num2Int))
      num = toString( num1Int + num2Int + carryOver - 10);
      carryOver = 1;
    } else {
      num = toString( num1Int + num2Int + carryOver)
      carryOver = 0;
    }
      console.log(typeof num)
      output = toString(num) + toString(output);
  }
    console.log((typeof output))
};

console.log(addStrings("357","46"));