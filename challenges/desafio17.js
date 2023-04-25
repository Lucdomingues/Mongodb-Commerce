const produtosTotal = db.produtos.find().count();

const insertResumoProdutos = db.resumoProdutos.insertOne(
    {
        franquia: "McDonalds",
        totalProdutos: produtosTotal,
    },
);

if (insertResumoProdutos) {
    db.resumoProdutos.find(
        {},
        { franquia: 1, totalProdutos: 1, _id: 0 },
    );
}