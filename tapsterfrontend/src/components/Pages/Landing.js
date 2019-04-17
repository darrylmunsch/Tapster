import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../../universal.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="regLog_btn"
                >
                  Register
              </Link>
              </div>
              <br />
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="regLog_btn "
                >
                  Log In
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;