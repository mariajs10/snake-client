const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('New client connected!')
  });

  // interpret incoming data as text
  conn.on('connect', () => {
    conn.write('Name: NM');
  });

  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  /*conn.on('connect', () => {
    conn.write('Move: up');
  });
  conn.on('connect', () => {
    conn.write('Move: down');
  });
  conn.on('connect', () => {
    conn.write('Move: left');
  });
  conn.on('connect', () => {
    conn.write('Move: right');
  });*/



  return conn;
}

module.exports = {connect};