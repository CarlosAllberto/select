const Sequelize = require("sequelize")
const dbConfig = require("../config/config.json")

try {
	var connection = new Sequelize(dbConfig.development)
} catch (err) {
	console.log(err)
}

module.exports = connection
