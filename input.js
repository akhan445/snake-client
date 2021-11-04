const handleUserInput = function (key) {
  // your code here
  switch(key) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write("Move: up");
      console.log("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      console.log("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      console.log("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      console.log("Move: right");
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