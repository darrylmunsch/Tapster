import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';



class SpinnerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : this.props
        }
    }


    render() {
        const isLoading = this.props.isLoading;
        if (isLoading) {
        return (
            <div>
            <Spinner animation="border" variant="light" />
            </div>
        )
        } else{
            return null;
        }
    }
}

export default SpinnerComponent;