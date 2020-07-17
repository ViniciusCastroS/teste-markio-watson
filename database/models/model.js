module.exports = (sequelize, Sequelize) => {
    const dbTextos = sequelize.define("texto", {
        title: {
            type: Sequelize.STRING
        }
    });

    return dbTextos;
};