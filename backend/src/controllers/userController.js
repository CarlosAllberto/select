const jwt = require("jsonwebtoken")
const UsuariosModel = require("../models/Usuarios")
const bcrypt = require("bcrypt")
require("dotenv").config({ path: "../variables.env" })

// criação do token JWT
const createToken = props => jwt.sign(props, process.env.JWT_TOKEN, { expiresIn: "15d" })

// criação de senha criptografada
const passwordHash = async props => await bcrypt.hash(props, 10)

// compara a senha com a senha criptografada
const passwordCompare = async (senha, hash) => await bcrypt.compare(senha, hash)

// verifica login
exports.loginAction = async (req, res) => {
	let { email, password } = req.body

	try {
		let response = await UsuariosModel.findOne({ where: { email } })
		if (response) {
			if (await passwordCompare(password, response.password)) {
				let { nome, email, genero } = response
				let token = createToken({ nome, email, genero })
				response.password = undefined
				return res.json({ response, token })
			}
		}
		res.status(403).send({ message: "Dados incorretos." })
	} catch {
		res.status(500).send({ message: "Tente novamente em alguns instantes." })
	}
}

// criação de novo usuario
exports.registerAction = async (req, res) => {
	let { nome, email, data, genero } = req.body
	let password = await passwordHash(req.body.password)

	try {
		let response = await UsuariosModel.create({ nome, email, data, genero, password })
		response.password = undefined
		let token = createToken({ nome, email, genero })
		if (response) res.json({ response, token })
	} catch (err) {
		if (err.name === "SequelizeUniqueConstraintError") return res.status(403).send("E-mail já está em uso.")
		res.status(500).send({ message: "Tente novamente em alguns instantes." })
	}
}

// edita os dados do usuario
exports.editAction = async (req, res) => {
	let { id } = req.params
	let { nome, email, data, genero, password, avatar } = req.body

	try {
		let response = await UsuariosModel.update({ nome, email, data, genero, password, avatar }, { where: { id } })
		if (response[0] > 0) {
			response = await UsuariosModel.findOne({ where: { id } })
			let { nome, email, data, genero } = response
			response.password = undefined
			let token = createToken({ nome, email, data, genero })
			return res.send({ message: "Dados alterados.", response, token })
		}
		res.status(404).send({ message: "Nada para alterar." })
	} catch {
		res.status(505).send({ message: "Tente novamente em alguns instantes." })
	}
}

// deleta a conta do usuario
exports.deleteAction = async (req, res) => {
	let { id } = req.params
	let { email, password } = req.body

	try {
		let response = await UsuariosModel.findOne({ where: { email } })
		if (response) {
			if (await passwordCompare(password, response.password)) {
				response = await UsuariosModel.destroy({ where: { id, email } })
				if (response > 0) return res.send({ message: "Conta deletada." })
			}
		}

		res.status(404).send({ message: "Conta não existe." })
	} catch {
		res.status(500).send({ message: "Tente novamente em alguns instantes." })
	}
}
