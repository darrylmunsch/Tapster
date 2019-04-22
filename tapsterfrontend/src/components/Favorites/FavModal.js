import React, { Component } from 'react';
import Pagination from '../IngSearchBar/Results/pagination';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import Axios from 'axios';
import UserFavs from '../Favorites/userFav';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import '../IngSearchBar/Results/results.css';
import '../IngSearchBar/Results/modal.css';
import '../../universal.css';

class FavModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            favs: [],
            pageOfItems: [],
            userFavs: [],
            show: false,
            emptyRes: ""
        }

        this.onChangePage = this.onChangePage.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onClick = this.onClick.bind(this);
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

    onClick() {
        const { user } = this.props.auth;

        Axios
            .post('/api/users/favs', user)
            .then(res => {

                this.setState({ userFavs: res.data })
            });
        fetch('/api/myFavorites')
            .then(res => res.json())
            .then(favs =>
                this.setState({ favs },
                    () => console.log("Favorites fetched...", favs),
                    this.handleEmptyRes(favs)
                ));

        this.setState({ show: true });
    }

    handleEmptyRes(favs) {

        if (favs.length === 0) {
            this.setState({ emptyRes: "You have no favorites." });
        } else {
            this.setState({ emptyRes: "" })
        }
        console.log(this.state.emptyRes);

    }

    handleClose() {
        this.setState({ show: false });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }




    render() {
        const favs = this.state.favs;
        const emptyRes = this.state.emptyRes;
        return (
            <div className="center_search">
                <button className="text_button"
                    onClick={this.onClick}>
                    Favorites
            </button>

                <Modal size="lg" show={this.state.show} onHide={this.handleClose} scrollable="true">
                    <Modal.Header closeButton>
                        <Modal.Title>Favorites ({favs.length})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }} >
                        {emptyRes}
                        {this.state.pageOfItems.map(item => <div key={item._id} >
                            <Container>
                                <Row><Col><div className="text-center"><h4>{item.strDrink}</h4></div></Col></Row>
                                <Row><Col><b>Ingredients:</b></Col></Row>
                                <Row><Col md="auto">{item.strMeasure1} &nbsp;
                            {item.strIngredient1}</Col>
                                    <Col md="auto">{item.strMeasure3} &nbsp;
                            {item.strIngredient3}</Col>
                                    <Col md="auto">{item.strMeasure5} &nbsp;
                            {item.strIngredient5}</Col>
                                    <Col md="auto">{item.strMeasure7} &nbsp;
                            {item.strIngredient7}</Col>
                                    <Col md="auto">{item.strMeasure9} &nbsp;
                            {item.strIngredient9}</Col>
                                    <Col md="auto">{item.strMeasure11} &nbsp;
                            {item.strIngredient11}</Col></Row>
                                <Row><Col md="auto">{item.strMeasure2} &nbsp;
                            {item.strIngredient2}</Col>
                                    <Col md="auto">{item.strMeasure4} &nbsp;
                            {item.strIngredient4}</Col>
                                    <Col md="auto">{item.strMeasure6} &nbsp;
                            {item.strIngredient6}</Col>
                                    <Col md="auto">{item.strMeasure8} &nbsp;
                            {item.strIngredient8}</Col>
                                    <Col md="auto">{item.strMeasure10} &nbsp;
                            {item.strIngredient10}</Col>
                                    <Col md="auto">{item.strMeasure12} &nbsp;
                            {item.strIngredient12}</Col></Row><br />
                                <b>Instructions:</b><br />
                                {item.strInstructions}
                                <br /><br />
                                <UserFavs id={item._id} />
                            </Container>
                            <br /></div>)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Pagination items={this.state.favs} onChangePage={this.onChangePage} ></Pagination>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

FavModal.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser },
)(FavModal);