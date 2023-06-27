"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("usuarios", { 
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(30),
                allowNull: false
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
                allowNull: false
            },
            avatar: {
                type: Sequelize.STRING(50),
                allowNull: true,
                defaultValue: "/avatars/default.png"
            }
        })
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("usuarios")
	},
}
