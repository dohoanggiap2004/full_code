const { Sequelize, DataTypes } = require('sequelize');
const { sequelize }= require('../../config/sequelizeConnect');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATEONLY
  },
  phoneNumber: {
    type: DataTypes.STRING(20)
  },
  typeAcc: {
    type: DataTypes.STRING(255),
    defaultValue: 'local'
  }
}, {
  tableName: 'users',
});

module.exports = User;
