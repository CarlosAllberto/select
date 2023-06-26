const app = require("./app")
require("dotenv").config({ path: "./variables.env" })

app.set("port", process.env.SERVER_PORT || 3331)
const server = app.listen(app.get("port"), () => {
	console.log(`\nSERVIDOR RODANDO EM: http://localhost:${server.address().port}\n`)
})
