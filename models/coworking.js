// on définit le model coworking qui se traduira par une table avec ses champs dans la BDD
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Coworking', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        price:{
            type: DataTypes.JSON
        },
        adress:{
            type: DataTypes.JSON
        },
        superficy:{
            type: DataTypes.INTEGER
        },
         capacity:{
            type: DataTypes.INTEGER
        }
    }, {
        // Other model options go here
    });
}