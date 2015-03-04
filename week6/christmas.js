var xmas = function (height) {
  var i, j, output, lightArray = [];

  // Create the base array of lights (2x the height)
  for (i=0; i <= height*2; i++) {
    lightArray.push("*");
  }

  for (; output = lightArray.slice(), height > 0; height--) {
    for (j=0; j < height; j += 1) {
      // Pad the beginning of the array with spaces
      output.splice(j, 1, " ");
      // Pad the end of the array with spaces
      output.splice(output.length - j - 1, 1, " ");
    }
    console.log(output.join(''));
  }
}

xmas(20);



 /*
 1. Populate the array
 2. Loop height number of times
 3. Make a copy of populated array
 4. Determine how many spaces at beginning and end
 5. Replace that number of asterisks
 6. Output results
 */

