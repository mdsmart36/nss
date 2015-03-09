function foo (something) {
    console.log( this.a, something );
    return this.a + something;
}

var bar = function(first) {
  return foo(first);
};

var a = 10;

var obj = {
    a: 5,
    bar: bar
};

var b = obj.bar( 3 );
console.log( b );












