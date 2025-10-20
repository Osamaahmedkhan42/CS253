const http = require('http')


const port = process.argv[2]




const server = http.createServer(function (req, res) {
       //check for POST
       if (req.method !== 'POST') {
           // Return a 405 Method Not Allowed error for any non-POST request
           res.writeHead(405, { 'Content-Type': 'text/plain' })
           return res.end('Send me a POST request.\n')
       }

       res.writeHead(200, { 'Content-Type': 'text/plain' })

       let body = ''

       req.on('data', (chunk) => {
       // Convert the Buffer chunk to a string and append it to the body variable
       body += chunk.toString()
       })

       req.on('end', () => {
           // Convert the complete accumulated body to uppercase
           const uppercaseBody = body.toUpperCase()
           
           // Send the result and close the response
           res.end(uppercaseBody)
         })



     })
server.listen(port)