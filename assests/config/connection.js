// Pull in required dependencies
const { util } = require('config');
var mysql = require('mysql');
const secrets = require('../../controllers/burgers_controller');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '1125',
        database: 'burgers_db'
    })
};

// Make the connection to MySQL
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});


// Export connection for ORM use
module.exports = connection;