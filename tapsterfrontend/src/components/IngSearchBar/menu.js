import React, { Component } from 'react';
import Select from 'react-select';
import {ingAlcohols} from './ingredients.js';



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