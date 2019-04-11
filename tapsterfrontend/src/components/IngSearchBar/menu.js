import React, {Component} from 'react';
import Select from 'react-select';


const ingAlcohols = [
    {label: "Vodka", value: 1},
    {label: "Rum", value: 2},
    {label: "Whiskey", value: 3},
    {label: "Gin", value: 4},
    {label: "Brandy", value: 5},
    {label: "Tequila", value: 6},
    {label: "Coca-Cola", value: 7},
    {label: "Mountain Dew", value: 8},
    {label: "Sprite", value: 9},
    {label: "Root Beer", value: 10},
    {label: "Orange Fanta", value: 11},
    {label: "Pineapple Fanta", value: 12},
    {label: "Grape Fanta", value: 13},
    {label: "Vanilla Coke", value: 14},
    {label: "Tonic Water", value: 15},
    {label: "Angostura Bitters", value: 16} ,   
    {label: "Lime", value: 17},
    {label: "Salt", value: 18}
];





class SearchMenu extends Component{

        state = {
            ingSelected: null,
    };

    handleChangeAlc = (ingSelected) => {
        this.setState({ingSelected});
        console.log('Alcohols Selected:', ingSelected);

       fetch('/express_backend_alcSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(ingSelected),
        });
    };
    
    render() {
        const {ingSelected} = this.state;

        return(
        <div>
            <h1><u>Choose Ingredients</u></h1>
                <div float="left">
                    <div className="container"  >
                        <Select 
                        value={ingSelected}
                        options={ingAlcohols}
                        onChange={this.handleChangeAlc}
                        placeholder={"Choose Ingredients..."} 
                        isMulti />
                        <br/>
                    </div>
                    
                 </div>
        </div>
        );
      }
}


export default SearchMenu;