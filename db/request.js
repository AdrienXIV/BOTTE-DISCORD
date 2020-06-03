/**
 * DB
 */
require('./database');
const MySql = require('./database');

const requestQuery = 'INSERT INTO messages (content, user, date) VALUES ?';

exports.Insert = value => {
  MySql.query(requestQuery, [value]);
};
