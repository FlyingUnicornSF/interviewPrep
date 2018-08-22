function foo() {

  function bar() {
    setTimeout(
      ()=>console.log('Curly'),
      1000);

  }
  console.log( "Larry");
  return bar;

}

let x = foo();
x();
console.log("Moe");