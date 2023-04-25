const vendasPorDia = db.produtos.updateMany(
    {},
    {
        $set: {
            vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
        },
    },
);

const incBigMac = db.produtos.updateOne(
    { nome: "Big Mac" },
    {
        $inc: {
            "vendasPorDia.3": 60,
        },
    },
);

const incBovino = db.produtos.updateMany(
    {
        tags: { $in: ["bovino"] },
    },
    {
        $inc: {
            "vendasPorDia.6": 120,
        },
    },
);

if (vendasPorDia || incBigMac || incBovino) {
    db.produtos.find(
        {},
        { nome: 1, vendasPorDia: 1, _id: 0 },
    );
}
