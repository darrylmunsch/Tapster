import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container
} from 'reactstrap';
import DrinkMenu from '../DrinkSearchBar/drinkMenu';
import DrinkResults from '../DrinkSearchBar/drinkResults';
import SearchMenu from '../IngSearchBar/menu';
import Results from '../IngSearchBar/Results/results';
import '../../universal.css'
import FavModal from '../Favorites/FavModal';

class UserHome extends Component {

    state = {
        
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Navbar color="secondary" dark expand="sm">
                    <Container>
                        <NavbarBrand>Welcome back, <b>{user.name.split(" ")[0]}</b>!</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink href="/userProfile" >Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" onClick={this.onLogoutClick}>Log Out</NavLink>
                                </NavItem>
                                <NavItem>
                                   <NavLink><FavModal/> </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <SearchMenu/>
                <Results/>
                <DrinkMenu/>
                <DrinkResults/>
                <div>
                </div>
            </div>
        )
    }
}

UserHome.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserHome);
