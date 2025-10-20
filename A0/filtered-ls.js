const fs = require('fs')
const path = require('path');
	
const filePath = process.argv[2]	
const filterExtension = '.'+process.argv[3];

fs.readdir(filePath,(err, list) =>{
	
	list.forEach(file =>{
		// console.log(path.extname(file))
		// console.log(filterExtension)
		if (path.extname(file) === filterExtension)
		{console.log(file)}
	})
})

// console.log(t.toString().split('\n').length-1);

