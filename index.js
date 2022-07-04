require("dotenv").config()
const http = require("http")
const app = require("./app")
const server = http.createServer(app)

const { API_PORT } = process.env
const port = process.env.PORT || API_PORT

// server listening
server.listen(port, (err) => {
	if (!err) return console.log(`server starts on port: ${port}`)
	console.log(err, "hello error")
})
