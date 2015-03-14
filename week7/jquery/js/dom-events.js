var targetDiv = document.getElementById("mousey");
var hiddenDiv = document.getElementById("hidden");
var button = document.getElementById("button");

// targetDiv.onmouseover = function () {
// 	targetDiv.classList.remove('red');
// 	targetDiv.classList.add('blue');
// }

// targetDiv.onmouseover = function () {
// 	targetDiv.classList.toggle('red');
// }

// targetDiv.onmouseout = function () {
// 	targetDiv.classList.add('red');
// }

var peopleToDisplay = [];
peopleToDisplay.push("Matt Smart");
peopleToDisplay.push("Thomas Bangs");
peopleToDisplay.push("Wiley Walker");
peopleToDisplay.push("Steve Brownlee");
peopleToDisplay.push("Joe Shepherd");
peopleToDisplay.push("Juan Rodriguez");

targetDiv.onmouseover = function() {
	hiddenDiv.classList.toggle('hide');
	hiddenDiv.innerHTML = peopleToDisplay.join("<br/>");
}

targetDiv.onmouseout = function () {
	hiddenDiv.classList.add('hide');
}

document.onclick = function () {
	alert("Hello World!");
}

