// given two strings, write a method to decide is one is a permutation of the other 

isPermutation = (str1, str2)=> {
  map = new Map();
  
  // edge cases 
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if(map.has(str1[i])){
      map.set(str1[i], map.get(str1[i])+1)
    } else {
      map.set(str1[i], 1)
    }
  }
  for (let j = 0; j < str2.length; j++ ) {
    if(map.has(str2) && map.get(str2) > 0) {
      map.set(str2[i], map.get(str2[i])-1)
    } else {
      return false
    }
  }
  return true;

}