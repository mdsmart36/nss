var express = require('express')
var app = express()

var output = "";

for (var i = 0; i < 100; i++) {

  output += "<div>";

  if (i % 3 === 0) {
    output += "fizz";
  }

  if (i % 5 === 0) {
    output += "buzz";
  }

  output += "</div>";

}


app.get('/', function (req, res) {
  res.send(output)
})



app.get('/bio', function (req, res) {
  res.send("This is my bio")
})





var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
