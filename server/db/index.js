const Sequelize = require("sequelize");
const db = new Sequelize("postgres://joe-alves:buttons@localhost:5432/colorz");

const ColorModel = db.define("color", {
    r: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 255
        }
    },
    g: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 255
        }
    },
    b: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 255
        }
    },
});

module.exports = { db, Color: ColorModel };