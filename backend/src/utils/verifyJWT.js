const jwt = require("jsonwebtoken")
require("dotenv").config({ path: "../variables.env" })

// verifica se o jwt token é valido
const verifyJWT = (req, res, next) => {
	let token = req.headers["authorization"]
	if (!token) return res.status(401).send({ auth: false, message: "Token não informado." })

	token = token.split(" ")[1]
	jwt.verify(token, process.env.JWT_TOKEN, err => {
		if (err) return res.status(500).send({ auth: false, message: "Token inválido." })
		next()
	})
}

module.exports = verifyJWT
