const { UP, RIGHT, DOWN, LEFT, WATCH_OUT, HUNGRY } = require("./constants")
const handleUserInput = function (key) {
  // your code here
  switch(key) {
    case '\u0003':
      process.exit();
    case UP:
      connection.write("Move: up");
      console.log("Move: up");
      break;
    case LEFT:
      connection.write("Move: left");
      console.log("Move: left");
      break;
    case DOWN:
      connection.write("Move: down");
      console.log("Move: down");
      break;
    case RIGHT:
      connection.write("Move: right");
      console.log("Move: right");
      break;
    case WATCH_OUT:
      connection.write("Say: Watch it, I'm sliding here");
      break;
    case HUNGRY:
      connection.write("Say: I'm hungry...");
       break;
  }
};

let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = { setupInput };