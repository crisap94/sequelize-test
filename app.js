var Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema','root','redenlacemysql',{
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false, // use Sequelize.Op
})

var Article = connection.define('article',{
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

connection.sync();