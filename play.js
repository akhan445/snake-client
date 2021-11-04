const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();

setupInput(conn);


// conn.on('data', (data) => {
//   console.log(data.toString());
//   conn.end();
// });

// // on any input from stdin (standard input), output a "." to stdout
// process.stdin.on('data', (key) => {
//   if (key === '\u0003') {
//     process.exit();
//   }
//   process.stdout.write('.');
// });
