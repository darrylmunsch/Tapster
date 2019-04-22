import React, { Component } from 'react';
import PropTypes from "prop-types";
import Axios from 'axios';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";



class UserFav extends Component {

    state = {
        isFav: this.props.isFav,
        error: ""
    }

    componentDidMount() {
        const { user } = this.props.auth;
        var id = this.props.id;
        //console.log(id);
        var checkFavs = function (element) {
            return element === id;
        }

        const favReq = user.favorites;
        //console.log("Button check", favReq.some(checkFavs));

        if (favReq !== undefined) {
            if (favReq.some(checkFavs) === true) {
                this.setState({ isFav: true })
            }
        }
    }

    toggleFav = () => {
        const { user } = this.props.auth;
        const favReq = user.favorites;
        
        if (favReq !== undefined) {
            this.setState({
                isFav: !this.state.isFav
            });

            const id = this.props.id;
            var checkFavs = function (element) {
                return element === id;
            }

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
        } else {
            this.setState({ error: "Please Log in to Favorite"});
            console.log(this.state.error)
        }
        const data = {
            favArray: favReq,
            id: user.id

        }
        Axios
            .post('/api/users/updateFavs', data)
    };

    render() {
        const error = this.state.error;
        return (

            <div className="text-danger">

                <button onClick={this.toggleFav}>
                    {this.state.isFav ? 'Remove Favorite' : 'Add Favorite'}
                </button>{error}

            </div>
        )
    }

}

UserFav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserFav);