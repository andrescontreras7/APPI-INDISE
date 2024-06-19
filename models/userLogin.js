const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/mysql");

const UserLogin = sequelize.define('UserLogin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  loginTimestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'user_logins',
  timestamps: false
});

module.exports = UserLogin;
