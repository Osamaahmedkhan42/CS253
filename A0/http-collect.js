const http = require('http')

const url = process.argv[2]
let fullData = ''

http.get(url,(res)=>{
	res.setEncoding('utf8').on('data',(data)=>{
		fullData = fullData + data
	}).on('end',()=>{
		console.log(fullData.length)
		console.log(fullData)
	})
})