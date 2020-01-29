import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  triggerFetch = (e) => {
    this.props.all.url(e);
  };

  triggerSearch = (e) => {
    //this.setState({ searchValue: e.target.value });
    this.props.all.searchBook(e.target.value);
  };

  triggerLanguage = (e) => {
    this.props.all.language(e.target.value);
  };

  render() {
    //const { url, searchBook } = this.props.all;

    return (
      <div>
        <nav className="navbar navbar-light bg-light d-flex flex-row justify-content-between">
          <Link to={{ pathname: "/" }}>
            <img
              id="logo"
              src={logo}
              alt="logo"
              className="navbar-brand mr-0"
            ></img>
          </Link>
          <div className="input-group col-5">
            <div className="input-group-prepend">
              <label className="input-group-text">Book Language</label>
            </div>
            <select
              id="selectedLang"
              className="custom-select"
              onChange={this.triggerLanguage}
            >
              <option defaultValue value="all">
                All languages
              </option>
              <option value="es">Spanish</option>
              <option value="en">English</option>
              <option value="ca">Catalan</option>
            </select>
          </div>
          <form className="form-inline">
            <Link to={{ pathname: "/" }}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.triggerSearch}
              />
            </Link>
          </form>
          <div>
            <Link to={{ pathname: "/" }}>
              <button
                type="button"
                value="en"
                onClick={() => this.triggerFetch("en")}
                variant="success"
                className="btn-success btn-lg m-2"
              >
                <span aria-label="English" role="img">
                  🇬🇧
                </span>
              </button>
            </Link>
            <Link to={{ pathname: "/" }}>
              <button
                type="button"
                value="es"
                onClick={() => this.triggerFetch("es")}
                variant="success"
                className="btn-success btn-lg m-2"
              >
                <span aria-label="Spanish" role="img">
                  🇪🇸
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
