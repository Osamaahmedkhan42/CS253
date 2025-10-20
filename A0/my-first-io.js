const fs = require('fs')
	
let t =fs.readFileSync(process.argv[2])

console.log(t.toString().split('\n').length-1);