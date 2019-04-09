'use strict';
var mongoose = require('mongoose');

const Drink = mongoose.model('Drinks');
var _=require('underscore');
exports.drinks = function(req, res){
    Drink.find({}, function(err, drink){
        if(err)
         res.send(err);
        res.json(drink);
    });
};

exports.getdrink = function(req, res){
    var drinkId = req.query.drinkId;
    Drink.findById(mongoose.Types.ObjectId(drinkId), function(err, drink){
        if(err)
         res.send(err);
        res.json(drink);    
    });
};


exports.comparequery = function(req, res){
    // var {ingAlcohols} =require('../routes/drinkRoutes.js');
  

    //var ingred= _.union(ingMixers,ingGarnishes,ingAlcohols);
    //console.log(ingAlcohols)
    const {ingAlcohols} =require('../routes/drinkRoutes.js');
    
    if(ingAlcohols === undefined || ingAlcohols.length == 0){
        ingred=['Blank'];
        Drink.find( { strIngList: { $all: ingred} } , function(err, drink){
            if(err)
             throw(err);
            res.status(200).send(drink);
        });
        
    
    }
    else{
    var ing=[];
    var ingred=ingAlcohols.map(function(ing){
        return ing['label'];
    });
    console.log(ingred);
    
    Drink.find( { strIngList: { $all: ingred} } , function(err, drink){
        if(err)
         throw(err);
        res.status(200).send(drink);
    });
    
    
}
    //var ingred= _.union(ingMixers,ingGarnishes,ingAlcohols);
    
 
};

exports.singlequery = function(req,res){
    const {ingAlcohols} =require('../routes/drinkRoutes.js');
    
    
    //var ingred= _.union(ingMixers,ingGarnishes,ingAlcohols);
    
    if (ingAlcohols === undefined || ingAlcohols.length == 0) {
        ingred=['Blank'];
        Drink.find( { strIngList: { $in:ingred}}, function(err,drink){
            if(err)
                throw(err);
            res.status(200).send(drink);
        });
       
    }
    else{
    var ing=[];
    var ingred=ingAlcohols.map(function(ing){
        return ing['label'];
    });
    console.log(ingred);
    
    Drink.find( { strIngList: { $in:ingred}}, function(err,drink){
        if(err)
            throw(err);
        res.status(200).send(drink);
    });
    
}
};

exports.partialquery = function(req, res){
    //var {ingAlcohols} =require('../routes/drinkRoutes.js');
    
    //var ingred= _.union(ingMixers,ingGarnishes,ingAlcohols);
    const {ingAlcohols} =require('../routes/drinkRoutes.js');
    
    
    //var ingred= _.union(ingMixers,ingGarnishes,ingAlcohols);
    
    if(ingAlcohols === undefined || ingAlcohols.length == 0 ){
        ingred=['Blank'];
        Drink.find( { strIngList: { $in:ingred}}, function(err,drink){
            if(err)
                throw(err);
            res.status(200).send(drink);
        });
        

    }
    if(ingAlcohols != undefined && ingAlcohols.length == 1){
    var ing=[];
    var ingred=ingAlcohols.map(function(ing){
        return ing['label'];
    });
        Drink.find( { strIngList: { $in:ingred}}, function(err,drink){
            if(err)
                throw(err);
            res.status(200).send(drink);
        });
    }
    if(ingAlcohols != undefined && ingAlcohols.length >= 2){
    var ing=[];
    var ingred=ingAlcohols.map(function(ing){
        return ing['label'];
    });
    console.log(ingred);
    var partialquery=[];
    for(var i=0; i<ingred.length-1; i++){
        for(var j=i+1; j<=ingred.length;j++){
        var temp=[]
        temp.push(ingred[i],ingred[j]);
        partialquery.push({strIngList: {$all: temp }});
        }
    }
    Drink.find( { $or: partialquery  } , function(err, drink){
        if(err)
         throw(err);
        res.status(200).send(drink);
    });
}
};

