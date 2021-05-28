import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./root.component.css";

class Root extends React.Component {
  componentDidMount() {
    fetch(
      `https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products?page=1`
    )
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
        },
        (e) => {
          console.error(e);
        }
      );
  }

  render() {
    return (
      <BrowserRouter>
        <nav className="nav">
          <Link to="/page1" className="link">
            Page 1
          </Link>
          <Link to="/page2" className="link">
            Page 2
          </Link>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Root;
