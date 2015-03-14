/*
  .....  YOUR MISSION  .....

  Using your knowledge of closures, create a
  function named secretKey() that accept any
  integer as an argument. That function should
  return another function that, when called,
  should output any random number between 1 and
  the number passed into secretKey().
*/


<<<<<<< HEAD
function secretKey (number) {
	return function () {
		console.log(Math.floor(Math.random() * number) + 1);
	}
=======
function secretKey (randNum) {

  return function () {

    return Math.random() * randNum;

  }
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49

}

var createKey = secretKey(341);
<<<<<<< HEAD
createKey();
=======
console.log('createKey()',createKey());
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
