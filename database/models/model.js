module.exports = (sequelize, Sequelize) => {
    const dbTextos = sequelize.define("textos", {
        title: {
            type: Sequelize.STRING
        }
    });

    return dbTextos;
};