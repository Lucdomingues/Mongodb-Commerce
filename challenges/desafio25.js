const update = db.produtos.updateMany(
    {
        valoresNutricionais: {
            $elemMatch: {
                tipo: "sódio",
                percentual: { $gte: 40 },
            },
        },
    },
    {
        $push: {
            tags: "muito sódio",
        },
    },
);

if (update) {
    db.produtos.find(
        {},
        { nome: 1, tags: 1, _id: 0 },
    );
}
