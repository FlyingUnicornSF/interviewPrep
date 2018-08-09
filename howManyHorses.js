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

howManyHourses = (string) => {
  // you can put this is an array like 
  // let letterCount = [];
  // that way it's more generic 
    let nCount = 0;
    let eCount = 0;
    let iCount = 0;
    let gCount = 0;
    let hCount = 0;
    for( let i = 0; i < string.length; i++ ) {
      // and if you use an array then you can change the nCount > ecount 
      // to letterCount[0]>letterCount[1], etc 
      if(string[i]==="n") nCount++;
      if(string[i]==="e"  && nCount > eCount) eCount++;
      if(string[i]==="i" && eCount > iCount) iCount++;
      if(string[i]==="g" && iCount > gCount) gCount++;
      if(string[i]==="h" && gCount > hCount) hCount++;
    }
    return hCount;
}
console.log(howManyHourses("nenigehnieighgh"));
console.log(howManyHourses("neningeehingiheighgh"));
console.log(howManyHourses("aeranoiwierhofgwaneraergtwe"));