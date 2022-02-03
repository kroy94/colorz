const { db, GroceryItem } = require("./index");
const seed = async () => {
    await db.sync({ force: true });

    await GroceryItem.create({ text: "Banana" });
    await GroceryItem.create({ text: "Egg" });

    db.close();

};
seed();