const remove = db.produtos.updateMany(
    {},
    {
        $pull: {
            ingredientes: "cebola",
        },
    },
);

if (remove) {
    db.produtos.find(
        {},
        { nome: 1, ingredientes: 1, _id: 0 },
    );
}
