import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/NavBar/appNavbar';
import SearchMenu from '../components/IngSearchBar/menu';
import Results from '../components/Results/results';
import Footer from '../components/Footer/footer';
import LoginModal from '../components/Forms/LoginModal';
import './App.css';
import RegisterModal from '../components/Forms/RegisterModal';



class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  handleResultsClick() {

  }


  render() {
    return (
      <div className="App">
        <AppNavbar />
        <SearchMenu />
        <Results />
        <br/>
        <br/>
        <LoginModal/>
        <RegisterModal/>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;