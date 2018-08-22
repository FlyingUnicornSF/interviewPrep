/* 
two arrays of interger 
for each element in the second array
find the total number of elements in the first array
which are less than or equal to that element 
https://www.geeksforgeeks.org/element-1st-array-count-elements-less-equal-2nd-array/
ex: 
first array = [1,2,3]
second array = [2, 4]
output = [1, 3]
 sort the second array 
2, 4
NlogN
 */
let nums = [1, 12, 2, 4]
// sorted [1, 2, 4, 12]

let maxes = [10, 3, 6, 1, 3, 2, 7]
// sorted 1, 2, 3, 3, 6, 7, 10
// output should be [3, 2, 3, 1, 2, 2, 3]
counts = (nums, maxes) => {
  //O(NlogN)
  nums.sort(function(a, b) {
    return a - b;
  }); 
  console.log(nums)
  let output = new Array();
  // edge cases: 
  // if all the nums are bigger than maxes
  // if (nums[0] > maxes[maxes.length-1]) {
  //   return output.fill(0);
  // }

  for( let i = 0; i < maxes.length; i++) {
    
    let leftIndex = 0;
    let rightIndex = nums.length-1;
    // not quite binary search, but this should cut time complexity 
    while (leftIndex <= rightIndex) {
      let mid = Math.floor((rightIndex+leftIndex)/2);
      if (nums[mid]<=maxes[i]){
        // if the picked number from the nums is smaller than the maxes number
        // move left index
        leftIndex = mid + 1;
      } else{
        // if the number is bigger move the index down and compare
        // move right index
        rightIndex = mid - 1;
      }
    }
    output.push(rightIndex+1);
  }
return output;
}

console.log(counts(nums, maxes))