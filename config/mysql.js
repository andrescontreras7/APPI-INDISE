const {Sequelize} = require('sequelize');
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV;
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST;


const sequelize = new Sequelize(

    database,
    username,
    password,
    {
        host,
        dialect:'mysql'

    }
)
const dbconnectMysqlpa = async() => {
    try{
        await sequelize.authenticate();
        console.log("conexion correcta ")
    }catch(e){
        console.log("error de concexion ,", e)
    }


}

module.exports = {sequelize, dbconnectMysqlpa}
