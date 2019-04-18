import React, { Component } from 'react';
import PropTypes from "prop-types";
import Axios from 'axios';
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";



class UserFav extends Component {

    state = {
        isFav: false,
        userFavs: []
    }

    toggleFav = () => {
        this.setState({
            isFav: !this.state.isFav
        });
        const { user } = this.props.auth;

        Axios
            .post("/api/users/favs", user)
            .then(res => {
                console.log(res.data);

                this.setState({ userFavs: res.data })
            })
            .then(userFavs => {
                var id = "000000000000000000000007"
                var checkFavs = function (element) {
                    return element == id;
                }

                const userFavs1 = this.state.userFavs;
                console.log(userFavs1)
                switch (userFavs1.some(checkFavs)) {
                    case true:
                        for (var i = 0; i < userFavs1.length; i++) {
                            while (userFavs1[i] == id) {
                                userFavs1.splice(i, 1);
                            }
                        }
                        console.log(userFavs1);
                        break;
                    case false:
                        userFavs1.push(id);
                        console.log(userFavs1);
                        break;
                    default:
                        console.log(userFavs1.some(checkFavs));

                        this.setState({ userFavs: userFavs1 })

                }
            });
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