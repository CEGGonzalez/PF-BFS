require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
	
	{
		logging: false,
		native: false,
		dialectModule: pg,
	}
);

const {} = sequelize.models;

module.exports = {

	conn: sequelize,
};