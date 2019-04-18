import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Provider } from "react-redux";
import store from "../store";
/** Components */
import AppNavbar from '../components/NavBar/appNavbar';
import SearchMenu from '../components/IngSearchBar/menu';
import Results from '../components/Results/results';
import Footer from '../components/Footer/footer';
import Landing from "../components/Pages/Landing";
import Register from "../components/Pages/auth/Register";
import Login from "../components/Pages/auth/Login";
import PrivateRoute from "../components/private-route/PrivateRoute";
import DevRoute from "../components/Pages/DevRoute";
import PostRoute from "../components/Pages/PostRoute";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


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
            <Route exact path="/" component={AppNavbar}  />
            <Route exact path="/" component={SearchMenu} />
            <Route exact path="/" component={Results} />
            <Route exact path="/Landing" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dev" component={DevRoute} />
              <PrivateRoute exact path="/postRoute" component={PostRoute}/>
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