import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Pagination from './pagination';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './results.css';
import './modal.css';



class Results extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      partialResults: [],
      compareResults: [],
      singleResults: [],
      results: [],
      pageOfItems: [],
      show: false,
      key: 'partialTab'
    }
    this.onChangePage = this.onChangePage.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleSingleTabSearch = this.handleSingleTabSearch.bind(this);
    this.handlePartialTabSearch = this.handlePartialTabSearch.bind(this);
    this.handleCompareTabSearch = this.handleCompareTabSearch.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  handleClickSearch() {
    fetch('http://localhost:5000/comparequery')
      .then(res => res.json())
      .then(results => this.setState({ results }, () => console.log('Compare Results fetched...', results)));

    this.setState({ show: true });
  }

  handleSingleTabSearch() {
    fetch('http://localhost:5000/singlequery')
      .then(res => res.json())
      .then(results => this.setState({ results }, () => console.log('Single Results fetched...', results)));

  }

  handleCompareTabSearch() {
    fetch('http://localhost:5000/comparequery')
      .then(res => res.json())
      .then(results => this.setState({ results }, () => console.log('Compare Results fetched...', results)));

  }
  handlePartialTabSearch() {
    fetch('http://localhost:5000/partialquery')
      .then(res => res.json())
      .then(results => this.setState({ results }, () => console.log('Partial Results fetched...', results)));

  }
  handleClose() {
    this.setState({ show: false });
  }


  render() {
    return (
      <div class="center_search">
        <button class="button_style2"
          onClick={this.handleClickSearch}>
          Search Database
        </button>


        <Modal size="lg" show={this.state.show} onHide={this.handleClose} scrollable="true">
          <Modal.Header closeButton>
            <Modal.Title>Search Results</Modal.Title>
          </Modal.Header>
          <Nav fill variant="tabs" activekey={this.state.key} defaultactivekey="/partialTab">
            <Nav.Item>
              <Nav.Link className="tabs_style" eventkey="compareTab" onClick={this.handleCompareTabSearch} onSelect={key => this.setState({ key })}>Compare Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tabs_style" eventkey="partialTab" onClick={this.handlePartialTabSearch} onSelect={key => this.setState({ key })} >Partial Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tabs_style" eventkey="singleTab" onClick={this.handleSingleTabSearch} onSelect={key => this.setState({ key })} >Single Search</Nav.Link>
            </Nav.Item>
          </Nav>
          <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }} >
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
              </Container>
              <br /></div>)}
          </Modal.Body>
          <Modal.Footer>
            <Pagination items={this.state.results} onChangePage={this.onChangePage} ></Pagination>
          </Modal.Footer>
        </Modal>
        <hr />
      </div>
    );
  }
}

export default Results;
