import React, { Component } from 'react';
import Select from 'react-select';


const ingAlcohols = [
    { label: "Vodka", value: 1 },
    { label: "Rum", value: 2 },
    { label: "Whiskey", value: 3 },
    { label: "Gin", value: 4 },
    { label: "Brandy", value: 5 },
    { label: "Tequila", value: 6 },
    { label: "Coca-Cola", value: 7 },
    { label: "Mountain Dew", value: 8 },
    { label: "Sprite", value: 9 },
    { label: "Root Beer", value: 10 },
    { label: "Orange Fanta", value: 11 },
    { label: "Pineapple Fanta", value: 12 },
    { label: "Grape Fanta", value: 13 },
    { label: "Vanilla Coke", value: 14 },
    { label: "Tonic Water", value: 15 },
    { label: "Angostura Bitters", value: 16 },
    { label: "Lime", value: 17 },
    { label: "Salt", value: 18 },
    { label: "Lager", value: 19 }
];





class SearchMenu extends Component {

    state = {
        ingSelected: null,
        ingSelectedAlc: null,
        ingSelectedMix: null,
        ingSelectedGarn: null
    };

    handleChangeAlc = (ingSelected) => {
        this.setState({ ingSelected });
        console.log('Alcohols Selected:', ingSelected);

        fetch('/express_backend_alcSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(ingSelected),
        });
    };
    /*handleChangeAlc = (ingSelectedAlc) => {
        this.setState({ingSelectedAlc});
        console.log('Alcohols Selected:', ingSelectedAlc);

       fetch('/express_backend_alcSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(ingSelectedAlc),
        });
    }
    
    handleChangeMix = (ingSelectedMix) => {
        this.setState({ingSelectedMix});
        console.log('Mixers Selected:', ingSelectedMix);

        fetch('/express_backend_mixSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(ingSelectedMix),
        });
    }
    handleChangeGarn = (ingSelectedGarn) => {
        this.setState({ingSelectedGarn});
        console.log('Garnishes Selected:', ingSelectedGarn);

        fetch('/express_backend_garnSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(ingSelectedGarn),
        });
    }*/


    render() {
        const { ingSelected } = this.state;
        /* const {ingSelectedAlc} = this.state;
         const {ingSelectedMix} = this.state;
         const {ingSelectedGarn} = this.state;*/




        return (
            <div>
                <h1><u>Choose Ingredients</u></h1>
                <div float="left">
                    <div className="container"  >
                        {/*<p style={{color: '#7cf1ff'}}>Alcohols</p>*/}
                        <Select
                            value={ingSelected}
                            options={ingAlcohols}
                            onChange={this.handleChangeAlc}
                            placeholder={"Choose Ingredients..."}
                            isMulti />
                        <br />
                        {/*<p style={{color: '#7cf1ff'}}>Mixers</p>
                        <Select 
                        value={ingSelectedMix}
                        options={ingMixers} 
                        onChange={this.handleChangeMix} 
                        placeholder={"Choose Mixers..."} 
                        isMulti />
                        <br />
                    <p style={{color: '#7cf1ff'}}>Garnishes</p>
                        <Select 
                        value={ingSelectedGarn}
                        options={ingGarnishes} 
                        onChange={this.handleChangeGarn} 
                        placeholder={"Choose Garnishes..."} 
                      isMulti />*/}
                    </div>

                </div>
            </div>
        );


    }


}


export default SearchMenu;