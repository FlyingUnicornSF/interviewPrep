/*  
detecting valid latitude and longitude pairs
https://www.hackerrank.com/challenges/detecting-valid-latitude-and-longitude/problem
/ rules 
// it starts with ( - if it starts with space - return Invalid
// no space after (
// no space before )
// no space before and after 
// no character allowed - if in between ( and , contains a letter - isNaN should work   
// if the number is out of the range  -90 <= x <=90 : -180 <= y <=180
*/

isValid = (coordinates)=>{
  // rules 
  // it starts with ( 
  // no space after (
  // no space before )
  // no space befor ,
  // there is ONE space after, 
  // no character allowed 
  // new RegExp(); would have been cleaner?
  
  let regex1 = '^\\(' + '[+-]?' + '[1-9]+' + '[0-9]+?' + '([.][0-9]+)?' + '[,]{1,1}[\\s](?![\\s])' + '[+-]?'+ '[1-9]+' + '[0-9]+?' + '([.][0-9]+)?' + '\\)$';
  let regex2 = '\\(([^)]+)[,]';
  let regex3 = '[,]([^)]+)\\)';

  for (let i = 0; i < coordinates.length; i++ ) {
    
    if(coordinates[i].match(regex1) !== null) {
      // if the number is out of the range  -90 <= x <=90 : -180 <= y <=180
      // putting it inside of this if. Unless it is a valid string, no need to do this compare. 
      let xCoordinate = new Number(coordinates[i].match(regex2)[1])
      let yCoordinate = new Number(coordinates[i].match(regex3)[1])
      if( -90 <= xCoordinate && xCoordinate <= 90 && -180 <= yCoordinate && yCoordinate <= 180){
        console.log("Valid")
      } else{
        console.log("Invalid")
      }
   }
    else {
      console.log("Invalid")
    }
  
  }
}

//let coordinates  = ["(90, 180)", "(+90, -180)", " (90, 180)","(90.1, 180)","(90S, 180W)","(- 090.00, 180.000)"]
// output [valid, valid, invalid, invalid, invalid, invalid]
//let coordinates  = ["(75, 180)", "(+90.0, -147.45)", "(77.11112223331, 149.99999999)", "(+90, +180)", "(90, 180)", "(-90.00000, -180.0000)", "(75, 280)", "(+190.0, -147.45)", "(77.11112223331, 249.99999999)", "(+90, +180.2)", "(90., 180.)", "(-090.00000, -180.0000)"]
// out put 
/*Valid
Valid
Valid
Valid
Valid
Valid
Invalid
Invalid
Invalid
Invalid
Invalid
Invalid*/
let coordinates  = ["(-6, -165)"]
isValid(coordinates);