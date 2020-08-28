//IMPORTAR MODELS


module.exports = {

    test(req, res) {
        return res.status(200).send({
            message: 'Bienvenido al template'
        })
    },

    // async list(req, res) {
    //     return await Tipocatalogos
    //         .findAll({
    //             where: { tipcatEstado: true },
    //             include: [{
    //                 model: Catalogos,
    //                 as: 'catalogos',
    //             }]
    //         })
    //         .then((tipocatalogos) => res.status(200).send(tipocatalogos))
    //         .catch((error) => res.status(400).send(error));
    // },

    // async getById(req, res) {
    //     return await Tipocatalogos
    //         .findOne({
    //             where: { tipcatId: req.params.id, tipcatEstado: true },
    //             include: [{
    //                 model: Catalogos,
    //                 as: 'catalogos',
    //             }]
    //         })
    //         .then((tipocatalogos) => {
    //             if (!tipocatalogos) {
    //                 return res.status(404).json({
    //                     message: 'No existe el registro',
    //                 });
    //             }
    //             return res.status(200).send(tipocatalogos);
    //         })
    //         .catch((error) => res.status(400).send(error));
    // },

    // async create(req, res) {
    //     return await Tipocatalogos
    //         .create({
    //             tipcatNombre: req.body.tipcatNombre,
    //             tipcatDescripcion: req.body.tipcatDescripcion,
    //             tipcatEstado: new Boolean(true),
    //             createdAt: new Date()
    //         })
    //         .then((tipocatalogos) => res.status(201).send(tipocatalogos))
    //         .catch((error) => res.status(400).send(error));
    // },

    // async update(req, res) {
    //     return await Tipocatalogos
    //         .findOne({
    //             where: { tipcatId: req.params.id, tipcatEstado: true },
    //             include: [{
    //                 model: Catalogos,
    //                 as: 'catalogos',
    //             }]
    //         })
    //         .then(tipocatalogos => {
    //             if (!tipocatalogos) {
    //                 return res.status(404).json({
    //                     message: 'No existe el registro a actualizar',
    //                 });
    //             }
    //             return tipocatalogos
    //                 .update({
    //                     tipcatNombre: req.body.tipcatNombre,
    //                     tipcatDescripcion: req.body.tipcatDescripcion,
    //                     tipcatEstado: req.body.tipcatEstado,
    //                     updatedAt: new Date()
    //                 })
    //                 .then(() => res.status(200).send(tipocatalogos))
    //                 .catch((error) => res.status(400).send(error));
    //         })
    //         .catch((error) => res.status(400).send(error));
    // },

    // async delete(req, res) {
    //     return await Tipocatalogos
    //         .findOne({ where: { tipcatId: req.params.id, tipcatEstado: true } })
    //         .then(tipocatalogos => {
    //             if (!tipocatalogos) {
    //                 return res.status(400).json({
    //                     message: 'No existe el registro a eliminar',
    //                 });
    //             }
    //             return tipocatalogos
    //                 .update({ tipcatEstado: false })
    //                 .then(() => res.status(204).json({
    //                     ok: true
    //                 }))
    //                 .catch((error) => res.status(400).json({
    //                     ok: false,
    //                     error
    //                 }));
    //         })
    //         .catch((error) => res.status(400).json({ error }));
    // }

};