const { DataTypes } = require('sequelize');
//Modelo de quien recibe el envío
module.exports = (sequelize) => { 
    sequelize.define('Receive', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        }, { freezeTableName: true
    });
}