// Problem Description

// There are a lot of horses in the yard, 
//and we want to count how many there are. 
//Unfortunately, we've only got a recording of the sounds from the yard. 
//All the horses say "neigh". The problem is they can "neigh" many times. 
//The recording from the yard is sadly all mixed together. 
//So, we need to figure out from the overlapping sounds how many horses there could be.

// For example, we've got two horses in the yard, and we hear this "neigneighh". 
//From this recording, we can successfully deduce there are 2 horses. 
//Another example is "neighneigh". From this example, we can only tell there is one horse in the yard.

// As an additional complexity, our recording might not be perfect. 
//If it's a bad recording, we should give "Invalid" as the response.

// The input will be given as a string on one line. The output should be printed on it's own line.

// Sample Input

// nenigehnieighgh

// Sample Output

// 2

howManyHourses = (string, sound) => {
  let count = 0;
  let letterCount = Array(string.length);
  letterCount.fill(0, 0, letterCount.length)
  // n = 0;
  // e = 1;
  // i = 2;
  // g = 3;
  // h = 4;
    for( let i = 0; i < string.length; i++ ) {
      // i could do this with for loop
      // if(string[i]==="n") letterCount[0]++;
      // if(string[i]==="e"  && letterCount[0] > letterCount[1]) letterCount[1]++;
      // if(string[i]==="i" && letterCount[1] > letterCount[2]) letterCount[2]++;
      // if(string[i]==="g" && letterCount[2] > letterCount[3]) letterCount[3]++;
      // if(string[i]==="h" && letterCount[3] > letterCount[4]) letterCount[4]++;
      for( let j = 0; j < sound.length; j++){
        if(string[i]===sound[0]) letterCount[0]++;
        if(string[i]===sound[j] && letterCount[j-1] > letterCount[j]) letterCount[j]++;
      }
      // how do I know it was continuous 
    }
    return letterCount[sound.length-1];
}
console.log(howManyHourses("nenigehnieighgh", "neigh"));
console.log(howManyHourses("neningeehingiheighgh", "neigh"));
console.log(howManyHourses("aeranoiwierhofgwaneraergtwe", "neigh"));
//nene neigh-neigh ighigh should return 3...
console.log(howManyHourses("neneneighneighighigh", "neigh"));