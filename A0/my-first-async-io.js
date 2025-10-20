const fs = require('fs')
	
const filePath = process.argv[2]	
fs.readFile(filePath, 'utf8', (err, data) =>{
	console.log(data.split('\n').length-1);
})

// console.log(t.toString().split('\n').length-1);

