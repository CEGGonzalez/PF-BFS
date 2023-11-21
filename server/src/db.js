require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bfs`,
	
	{
		logging: false,
		native: false,
		dialectModule: pg,
	}
);


const {User, Shipment, Receive, Package, Branch} = sequelize.models;

Shipment.hasMany(Receive, {foreignKey: "shipmentId"});
Receive.belongsTo(Shipment, {foreignKey: "receiveId"});

User.hasMany(Shipment);
Shipment.belongsTo(User);

Shipment.hasMany(Package);
Package.belongsTo(Shipment);

Branch.hasMany(Shipment);
Shipment.belongsTo(Branch);

User.belongsToMany(Branch, { through: 'User_Branch' });
Branch.belongsToMany(User, { through: 'User_Branch' });



module.exports = {	
	...sequelize.models,
  	conn: sequelize,
};
