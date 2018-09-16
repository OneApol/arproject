var bcrypt = require('bcrypt');
var db = require('./library/db');

//insert new user function
function insert_user(username, password){
	//check if username is taken or not
	if(check_username(username)){
		
		bcrypt.hash(password, 10, (err, hash)=> {
			//store in database
		});			
	}
}

function check_username(username){

}