'use strict'

module.exports = function (app) {

    var drink = require('../controller/drinksController.js');


    app.route('/api/drinks')
        .get(drink.drinks);

    app.route('/api/drinks/:drinkId')
        .get(drink.getdrink);

    app.route('/api/comparequery')
        .get(drink.comparequery);

    app.route('/api/singlequery')
        .get(drink.singlequery);

    app.route('/api/partialquery')
        .get(drink.partialquery);

    app.route('/api/exactquery')
        .get(drink.exactquery);




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