import React, { Component } from 'react';
import Pagination from '../IngSearchBar/Results/pagination';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import Axios from 'axios';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import UserFavs from '../Favorites/userFav';
import SpinnerComponent from '../LoadingSpinner';
import '../IngSearchBar/Results/results.css';
import '../IngSearchBar/Results/modal.css';

class DrinkResults extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            results: [],
            pageOfItems: [],
            userFavs: [],
            show: false,
            emptyRes: "",
            isLoading: false
        }

        this.onChangePage = this.onChangePage.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    static defaultProps = {
        isFav: false,
    }

    componentDidMount() {
        const { user } = this.props.auth;

        Axios
            .post("/api/users/favs", user)
            .then(res => {

                this.setState({ userFavs: res.data })
            });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleClickSearch() {
        this.setState({ isLoading: true });
        this.setState({ emptyRes: "Finding Drinks..." });
        fetch('/api/namequery')
            .then(res => res.json())
            .then(results =>
                this.setState({ results },
                    () => console.log('Name Results fetched...', results),
                    console.log(results.length),
                    this.handleEmptyRes(results),
                    this.resetLoading()
                ));
        this.setState({ show: true });
    }

    handleEmptyRes(results) {

        if (results.length === 0) {
            this.setState({ emptyRes: "No results Found." });
        } else {
            this.setState({ emptyRes: "" })
        }
        console.log(this.state.emptyRes);

    }

    handleClose() {
        this.setState({ show: false });
    }

    resetLoading() {
        this.setState({ isLoading: false });
    }

    render() {
        const results = this.state.results;
        const emptyRes = this.state.emptyRes;
        const isLoading = this.state.isLoading;
        
        return (
            <div className="center_search">
                <button className="button_style2"
                    onClick={this.handleClickSearch}>
                    Search Database
        </button>

                <Modal size="lg" show={this.state.show} onHide={this.handleClose} scrollable="true">
                    <Modal.Header closeButton>
                        <Modal.Title>Search Results ({results.length})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }} >
                        {emptyRes}
                        <SpinnerComponent isLoading={isLoading} />
                        {this.state.pageOfItems.map(item => <div key={item._id} >

                            <Container>
                                <Row><Col><div className="text-center"><h4>{item.strDrink}</h4></div></Col></Row>
                                <Row><Col><b>Ingredients:</b></Col></Row>
                                <Row><Col md="auto">{item.strMeasure1}
                                    {item.strIngredient1}</Col>
                                    <Col md="auto">{item.strMeasure3}
                                        {item.strIngredient3}</Col>
                                    <Col md="auto">{item.strMeasure5}
                                        {item.strIngredient5}</Col>
                                    <Col md="auto">{item.strMeasure7}
                                        {item.strIngredient7}</Col>
                                    <Col md="auto">{item.strMeasure9}
                                        {item.strIngredient9}</Col>
                                    <Col md="auto">{item.strMeasure11}
                                        {item.strIngredient11}</Col></Row>
                                <Row><Col md="auto">{item.strMeasure2}
                                    {item.strIngredient2}</Col>
                                    <Col md="auto">{item.strMeasure4}
                                        {item.strIngredient4}</Col>
                                    <Col md="auto">{item.strMeasure6}
                                        {item.strIngredient6}</Col>
                                    <Col md="auto">{item.strMeasure8}
                                        {item.strIngredient8}</Col>
                                    <Col md="auto">{item.strMeasure10}
                                        {item.strIngredient10}</Col>
                                    <Col md="auto">{item.strMeasure12}
                                        {item.strIngredient12}</Col></Row><br />
                                <b>Instructions:</b><br />
                                {item.strInstructions}
                                <br /><br />
                                <UserFavs id={item._id} />
                            </Container>
                            <br /></div>)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Pagination items={this.state.results} onChangePage={this.onChangePage} ></Pagination>
                    </Modal.Footer>
                </Modal>
                <hr />
            </div>
        )
    }
}

DrinkResults.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser },
)(DrinkResults);