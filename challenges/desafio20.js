const removeFirtChild = db.produtos.updateMany(
    {
        nome: "Quarteirão com Queijo",
    },
    {
        $pop: {
            ingredientes: -1,
        },
    },
);

if (removeFirtChild) {
    db.produtos.find(
        {},
        { nome: 1, ingredientes: 1, _id: 0 },
    );
}
