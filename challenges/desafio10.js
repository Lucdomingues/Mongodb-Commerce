db.produtos.find(
    {
        valoresNutricionais: {
            $elemMatch: {
                tipo: { $eq: "proteínas" },
                percentual: { $gte: 30, $lte: 40 },
            },
        },
    },
    { nome: 1, _id: 0 },
);