const { IP, PORT } = require('./constants');

const net = require('net');

//Establishes connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Sucessfully connected to game server');
  //a "connect" handler (a callback function)
  });

  conn.on('connect', () => { //send data to server via TCP
    conn.write('Name: NM');
  });  
  
  

  //an event handler to handle incoming data 
  //and console log it for the player.
  conn.on('data', (data) => {
    console.log('Game: ', data)
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

// ES6 object shorthand notation in client.js to export 
//an object containing our connect function.
const connectobject = {
  connect,
};

//console.log(connectobject); 

module.exports = connectobject;