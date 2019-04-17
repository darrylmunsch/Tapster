import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Provider } from "react-redux";
import store from "../store";
import AppNavbar from '../components/NavBar/appNavbar';
import SearchMenu from '../components/IngSearchBar/menu';
import Results from '../components/Results/results';
import Footer from '../components/Footer/footer';

import Landing from "../components/Landing";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/dashboard/dashboard";
import RegisterModal from '../components/Forms/RegisterModal';
import LoginModal from '../components/Forms/LoginModal'




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

  // Check for token to keep user logged in

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
            </div>
        </Router>
      </Provider>
    );
  }
}
//            <Route exact path="/" component={Landing} />
export default App;