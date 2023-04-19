const update = db.produtos.updateMany(
    {
        nome: { $ne: "McChicken" },
    },
    {
        $addToSet: {
            ingredientes: "ketchup",
        },
    },
);

if (update) {
    db.produtos.find(
        {},
        { nome: 1, ingredientes: 1, _id: 0 },
    );
}