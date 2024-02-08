const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
	'online_store',
	'postgres',
	'postgres',
	{
		host: 'localhost',
		dialect: 'postgres',
		port: process.env.DB_PORT
	}
)

