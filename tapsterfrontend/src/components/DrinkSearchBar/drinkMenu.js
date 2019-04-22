import React, { Component } from 'react';
import Select from 'react-select';
import {drinkNames} from './drinkNames';

class DrinkMenu extends Component {

    state = {
        drinkSelected: null,
    };

    handleChange = (drinkSelected) => {
        this.setState({ drinkSelected });
        console.log('Alcohols Selected:', drinkSelected);

        fetch('/express_backend_nameSearch', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(drinkSelected),
        });
    };


    render() {
        const { drinkSelected } = this.state;

        return (
            <div>
                <h1><u>Search By Drink</u></h1>
                <div float="left">
                    <div className="container"  >
                        <Select
                            value={drinkSelected}
                            options={drinkNames}
                            onChange={this.handleChange}
                            placeholder={"Drink Name"}
                            isMulti />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}


export default DrinkMenu;