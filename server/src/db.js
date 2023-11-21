require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const UserModel = require("./models/User");
const ShipmentModel = require("./models/Shipment");
const ReceiveModel = require("./models/Receive");
const PackageModel = require("./models/Package");
const BranchModel = require("./models/Branch");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bfs`,
	
	{
		logging: false,
		native: false,
		dialectModule: pg,
	}
);

UserModel(sequelize);
ShipmentModel(sequelize);
ReceiveModel(sequelize);
PackageModel(sequelize);
BranchModel(sequelize);

const {User, Shipment, Receive, Package, Branch} = sequelize.models;

Shipment.hasOne(Receive);
Receive.belongsTo(Shipment);

User.hasMany(Shipment);
Shipment.belongsTo(User);

Shipment.hasMany(Package);
Package.belongsTo(Shipment);

Branch.hasMany(Shipment);
Shipment.belongsTo(Branch);

User.belongsToMany(Branch, { through: 'User_Branch' });
Branch.belongsToMany(User, { through: 'User_Branch' });



module.exports = {	
  	conn: sequelize,
};

/* module.exports = {
	...sequelize.models,
	conn: sequelize,
}; */