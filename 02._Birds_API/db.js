const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'openUser',
  password: 'sesam80',
  database: 'birds',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to birds database!');
});

module.exports = connection;
