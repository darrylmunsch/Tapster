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
                    </div>
                </div>
            </div>
        );
    }
}


export default SearchMenu;