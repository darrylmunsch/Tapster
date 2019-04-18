import React, { Component } from 'react';
import PropTypes from "prop-types";
import Axios from 'axios';
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";



class UserFav extends Component {

    state = {
        isFav : this.props.isFav
    }


    toggleFav = () => {
        this.setState({
            isFav: !this.state.isFav
        });

        const { user } = this.props.auth;
        const id = "000000000000000000000007"
        var checkFavs = function (element) {
          return element === id;
        }
    
        const favReq = user.favorites;
        switch (favReq.some(checkFavs)) {
            case true:
                for (var i = 0; i < favReq.length; i++) {
                    while (favReq[i] === id) {
                        favReq.splice(i, 1);
                    }
                }
                break;
            case false:
                favReq.push(id);
                break;
            default:


        }
        const data = {
            favArray: favReq,
            id: user.id

        }
        Axios
            .post('/api/users/updateFavs', data)
    };

    render() {
        return (

            <div>
                <button onClick={this.toggleFav}>
                    {this.state.isFav ? 'Remove Favorite' : 'Add Favorite'}
                </button>

            </div>
        )
    }

}

UserFav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserFav);