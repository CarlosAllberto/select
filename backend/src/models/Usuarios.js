const Sequelize = require("sequelize")
const connection = require("../database")

const Usuarios = connection.define("usuarios", {
	nome: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true
	},
	data: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	genero: {
		type: Sequelize.STRING(1),
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	}
}, { timestamps: false })

module.exports = Usuarios
