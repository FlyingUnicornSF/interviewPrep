/* multiple ways this problem will be asked. 
- given an interger, print all combinations or give total number of) of blanaced brackets. 
- if the given string is a valid combinations of brackets 
*/

// Given  strings of brackets, determine whether each sequence of brackets is balanced. 
// If a string is balanced, return YES. Otherwise, return NO.
isBalanced = (str)=>{
  let stack = [];
  // edge cases 
  if(str.length < 2) return false;
  if(str.length % 2 !== 0) return false;

  for( let i=0; i < str.length; i++) {
    if( str[i] === "{" || str[i] === "(" || str[i] === "[" ) {
      stack.push(str[i])
    } else if (str[i] === ")"){
      if (stack.pop() !== "(") return false;
    } else if (str[i] === "}"){
      if (stack.pop() !== "{") return false;
    } else if (str[i] === "]"){
      if (stack.pop() !== "[") return false;
    }
  }
  return true;
}
// number of possible permutation 

console.log(isBalanced("{[()]}"))
console.log(isBalanced("{[(])}"))
console.log(isBalanced("[()[{()}]][]]"))
console.log(isBalanced("[()[][]]{}(())()[[([])][()]{}{}(({}[]()))()[()[{()}]][]]"))
/*
[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}
(])[{{{][)[)])(]){(}))[{(})][[{)(}){[(]})[[{}(])}({)(}[[()}{}}]{}{}}()}{({}](]{{[}}(([{]
){[]()})}}]{}[}}})}{]{](]](()][{))])(}]}))(}[}{{)}{[[}[]
}(]}){
((]()(]([({]}({[)){}}[}({[{])(]{()[]}}{)}}]]{({)[}{(
{}{({{}})}[][{{}}]{}{}(){{}[]}{}([[][{}]]())
(){}[()[][]]{}(())()[[([])][()]{}{}(({}[]()))()[()[{()}]][]]
()([]({}[]){}){}{()}[]{}[]()(()([[]]()))()()()[]()(){{}}()({[{}][]}[[{{}({({({})})})}]])
[]([{][][)(])}()([}[}(})}])}))]](}{}})[]({{}}))[])(}}[[{]{}]()[(][])}({]{}[[))[[}[}{(]})()){{(]]){][
{()({}[[{}]]()(){[{{}{[[{}]{}((({[]}{}()[])))]((()()))}(()[[[]]])((()[[](({([])()}))[]]))}]})}
()(){{}}[()()]{}{}
{}()([[]])({}){({[][[][[()]]{{}[[]()]}]})}[](())((())[{{}}])
{}(((){}){[]{{()()}}()})[]{{()}{(){()(){}}}}{()}({()(()({}{}()((()((([])){[][{()}{}]})))))})
][[{)())))}[)}}}}[{){}()]([][]){{{{{[)}]]{([{)()][({}[){]({{
{{}(
{[{((({}*/