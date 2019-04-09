const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');


var Drink = require('./restapi/models/drinksModel');
const bodyParser = require('body-parser');

const app = express();
var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(session({
    secret: 'secret',
    resave:false,
    saveUninitialized: false,
    cookie:{maxAge: 3600000, secure: false}
}));

drinkroutes = require('./restapi/routes/drinkRoutes');
drinkroutes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' notfound'})
});

//DB Config
const database = require('./config/keys').mongoURI;

 

//Connect to Mongo
mongoose
    .connect(database, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;
    


    app.listen(port, () => console.log(`Server started on port ${port}`));

