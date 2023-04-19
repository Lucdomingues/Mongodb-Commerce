const remove = db.produtos.deleteMany(
    {
        curtidas: {
            $lt: 50,
        },
    },
);

if (remove) {
    db.produtos.find(
        {},
        { nome: 1, _id: 0 },
    );
}