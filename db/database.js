require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8mb4_general_ci',
});

try {
  connection.connect(function (err) {
    if (err) throw 'mysql connection error : ' + err;
    console.log('Connexion à la base de données réussi !');
  });
} catch (error) {
  console.error(error);
  connection.end();
}

module.exports = connection;
