/* given an array of int 
find max total of number of sub array - contenious 
[ 4, 1, 9, -4, -1, 5, -2] returns 14
[-2,1,-3,4,-1,2,1,-5,4] returns 6
https://leetcode.com/problems/maximum-subarray/description/

- first thoughts: 
it's a sliding window algorithm question
two for loops - quite messy and I need to make some memory and stop going through everyrthing

*/

// two for loop methos

maxSubArray = (nums) => {
  if( nums.length < 1 ) return nums;
  // sliding window requires start and end index
  // so my inital thought was to make these:
  // let startIndex = 0;
  // let endIndex = 1; 
  // But JS for loop let you start with (let i)
  // instead, for( let startIndex = 0; .......
  
  
  // I used to set this to 0. But when you are dealing with negative numbers,  
  // this is the correct way.
  let max = Number.MIN_SAFE_INTEGER;
  let subtotal = 0;
  for( let startIndex = 0; startIndex < nums.length; startIndex++) {

    // slide the endIndex starting from StartIndex 
    // initially I thought setting endIndex = startIndex + 1;
    // but that created a problem if there are only two items in an array and don't want to add them.
    // nums = [10, -1] should return 10 
    // this is where it tripps me always. Where to set the subtotal? 
    subtotal =0;
  
    for( let endIndex = startIndex; endIndex < nums.length; endIndex++) {
      subtotal = subtotal + nums[endIndex];
      if (subtotal > max) {
        max = subtotal;
      }
    }
  }
  return max;
}


/* 
I thought about this one
[]
- arrays I didn't think as a case 
[-1, -2, -3, -4] <-- should return -1
[10, -1] <-- should return 10
*/
console.log(maxSubArray([ 4, 1, 9, -4, -1, 5, -2]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([]));
console.log(maxSubArray([-1, -2, -3, -4]));
console.log(maxSubArray([10, -1 ]));







