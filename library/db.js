//db
const pg = require('pg');

const pool = new pg.Pool({
  	user: 'postgres',
  	host: 'localhost',
  	database: 'ardb',
  	password: '',
  	port: 5432,
});

module.exports = pool;
