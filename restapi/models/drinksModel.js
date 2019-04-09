var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var drinkSchema = new Schema({
        strDrink: String,
        strAlcoholic: String,
        strCategory: String,
        strDrinkThumb: String, 
        strGlass: String,
        strIngredient1: String,
        strIngredient2: String,
        strIngredient3: String,
        strIngredient4: String,
        strIngredient5: String,
        strIngredient6: String,
        strIngredient7: String,
        strIngredient8: String,
        strIngredient9: String,
        strIngredient10: String,
        strIngredient11: String,
        strIngredient12: String,
        strMeasure1: String,
        strMeasure2: String,
        strMeasure3: String,
        strMeasure4: String,
        strMeasure5: String,
        strMeasure6: String,
        strMeasure7: String,
        strMeasure8: String,
        strMeasure9: String,
        strMeasure10: String,
        strMeasure11: String,
        strMeasure12: String,
        strInstructions: String,
        strIngList: [String]
});

module.exports = mongoose.model('Drinks',drinkSchema);
