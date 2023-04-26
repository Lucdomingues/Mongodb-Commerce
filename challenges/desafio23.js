const update = db.produtos.updateMany(
    {},
    {
        $push: {
            tags: {
                $each: ["combo", "tasty"],
                $sort: 1,
            },
        },
    },
);

if (update) {
    db.produtos.find(
        {},
        { nome: 1, tags: 1, _id: 0 },
    );
}
