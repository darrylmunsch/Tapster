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

    app.route('/api/myFavorites')
        .get(drink.favoritesquery);
    
    app.route('/api/namequery')
        .get(drink.namequery);




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

    app.post('/express_backend_nameSearch', async (req, res) => {

        let alcNames;
        try {
            alcNames = req.session.nameSearch = await req.body;
            module.exports = { alcNames };
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
        res.json({ alcNames })
        module.exports = { alcNames };
    });

};