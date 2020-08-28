// const catalogoController = require('../controllers').catalogo;
const testController = require('../controllers').test;
module.exports = (app) => {

    app.get('/', testController.test);

};