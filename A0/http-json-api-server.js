const http = require('http')
const url = require('url')

const port = process.argv[2]


// Helper function to format the time components
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  // getTime() returns milliseconds since epoch
  return { unixtime: time.getTime() }
}

function routeRequest (parsedUrl, res) {
       if (!parsedUrl.query.iso){
              res.writeHead(400, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ error: 'Missing ISO time parameter.' }))
       }

       //
       const time = new Date(parsedUrl.query.iso)
       let result = ''
       if (parsedUrl.pathname === '/api/parsetime'){
              result = parsetime(time)
       }else if(parsedUrl.pathname === '/api/unixtime') {
               result = unixtime(time)
  }

  //
  if (result) {
    // Set headers for a successful JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // Send the JSON stringified result
    res.end(JSON.stringify(result))
  } else {
    // Handle unknown or unsupported endpoints
    res.writeHead(404)
    res.end()
  }
}



const server = http.createServer(function (req, res) {
       const parsedUrl = url.parse(req.url, true)
       routeRequest(parsedUrl, res)
})

server.listen(port)