const net = require('net')
const date = new Date()

const port = process.argv[2]

function zeroPad(i) {
  return (i < 10 ? '0' : '') + i
}

// YYYY-MM-DD HH:MM
const year = date.getFullYear()
const month = zeroPad(date.getMonth() + 1) // getMonth() is 0-indexed, so add 1
const day = zeroPad(date.getDate())
const hours = zeroPad(date.getHours())
const minutes = zeroPad(date.getMinutes())

currentDate = `${year}-${month}-${day} ${hours}:${minutes}\n`

const server = net.createServer((socket)=>{
	socket.write(currentDate)
	socket.end()
})

server.listen(port)