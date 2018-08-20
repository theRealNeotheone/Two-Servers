// Require/import the HTTP module
var http = require("http");
// create variable for switching between the two ports
var portSwitch = process.argv[2];

// Define two ports to listen for incoming requests
var PORT_GOOD = 7000;
var PORT_BAD = 7500;

// Create a generic function to handle positive requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're awesome dude!" + request.url);
}
// Create a generic function to handle negative requests and responses
function handleRequestTwo(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You suck man!" + request.url);
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
if (portSwitch === "good") 

{serverOne.listen(PORT_GOOD, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_GOOD);
})}

else if (portSwitch === "bad") {

serverTwo.listen(PORT_BAD, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT_BAD);

})};