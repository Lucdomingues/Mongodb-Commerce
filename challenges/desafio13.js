const update = db.produtos.updateMany(
    {},
    {
        $set: {
            criadoPor: "Ronald McDonald",
        },
    },
);

if (update) {
    db.produtos.find(
        {},
        { nome: 1, criadoPor: 1, _id: 0 },
    );
}