const update = db.produtos.updateMany(
    { nome: "Big Mac" },
    {
        $currentDate: {
            ultimaModificacao: { $type: "date" },
        },
    },
);

if (update) {
    db.produtos.find(
        { ultimaModificacao: { $exists: true } },
        { nome: 1, _id: 0 },
    );
}