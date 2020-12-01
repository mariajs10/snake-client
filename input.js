// Stores the active TCP connection object.
let connection;

/** 
* Setup User Interface 
* Specifically, so that we can handle user input via stdin
*/

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;

  stdin.on("data", function handleUserInput(key) {

    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
      connection.write("Say: go!go!");

    } else if (key === "d") {
      connection.write("Move: right");
    }
  });
  //uses the handleUserInput,
  // runs that function on whatever data is coming

  
  return stdin;
}


const setUpObject = {
  setupInput,
};

module.exports = setUpObject;