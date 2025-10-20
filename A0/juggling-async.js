const http = require('http')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

const urls = [url1,url2,url3]
const results = []
let count =0

function httpGetS(index){

let fullData = ''
http.get(urls[index],(res)=>{
	res.setEncoding('utf8').on('data',(data)=>{
		fullData = fullData + data
	}).on('end',()=>{
		results[index] = fullData
		count++

		if (count === urls.length) {
        printResults()
      }
	})


})
}

//
function printResults() {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i])
  }
}

//
for (let i = 0; i < urls.length; i++) {
  httpGetS(i)
}