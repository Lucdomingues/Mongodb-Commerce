const update = db.produtos.updateMany(
    {},
    {
        $set: {
            avaliacao: 0,
        },
    },
);

const updateBovino = db.produtos.updateMany(
    {
        tags: {
            $all: ["bovino"],
        },
    },
    {
        $inc: {
            avaliacao: 5,
        },
    },
);

const updateAve = db.produtos.updateMany(
    {
        tags: {
            $all: ["ave"],
        },
    },
    {
        $inc: {
            avaliacao: 3,
        },
    },
);

if (update || updateBovino || updateAve) {
    db.produtos.find(
        {},
        { nome: 1, _id: 0, avaliacao: 1 },
    );
}