'use strict'

module.exports = function (app) {

    var drink = require('../controller/drinksController.js');


    app.route('/drinks')
        .get(drink.drinks);

    app.route('/drinks/:drinkId')
        .get(drink.getdrink);

    app.route('/comparequery')
        .get(drink.comparequery);

    app.route('/singlequery')
        .get(drink.singlequery);

    app.route('/partialquery')
        .get(drink.partialquery);




    //GET 
    app.get('/express_backend', (req, res) => {
        res.send({ express: 'Express backend connected to React' });
    });

    //POST
    app.post('/express_backend_alcSearch', async (req, res) => {

        let ingAlcohols;
        try {
            ingAlcohols = req.session.alcSearch = await req.body;
            module.exports = { ingAlcohols };
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
        res.json({ ingAlcohols })
        module.exports = { ingAlcohols };
    });

};