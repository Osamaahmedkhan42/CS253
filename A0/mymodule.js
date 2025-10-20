const fs = require('fs')
const path = require('path');
	
const filePath = process.argv[2]	
const filterExtension = '.'+process.argv[3];

module.exports  = function(filePath,ext,callback){
	const reqExt = '.' + ext

	fs.readdir(filePath,(err, list) =>{
		if(err){
			return callback(err)
		}
		const fileredList = list.filter(file => {
			return path.extname(file) === reqExt  
		})
		callback(null,fileredList)

	
	
	})
}





