const removeLastChild = db.produtos.updateMany(
    {
        nome: "Cheddar McMelt",
    },
    {
        $pop: {
            ingredientes: 1,
        },
    },
);

if (removeLastChild) {
    db.produtos.find(
        {},
        { nome: 1, ingredientes: 1, _id: 0 },
    );
}
