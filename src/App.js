import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Bookstore from "./components/Bookstore";
import Book from "./components/Book";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBooks: [],
      searchBooks: [],
      searchValue: "",
      languageValue: "all",
      url: "https://api.myjson.com/bins/1h3vb3"
    };
  }

  componentDidMount() {
    // Here goes fetch and asyncronous functions
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // Uso tipico (no olvides de comparar los props):
    if (this.state.url !== prevState.url) {
      this.fetchData();
    }
  }

  fetchData = () => {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          listBooks: data.books,
          searchBooks: data.books
        });
      });
  };

  url = (value) => {
    if (value === "es") {
      this.setState({ url: "https://api.myjson.com/bins/1h3vb3" });
    } else if (value === "en") {
      this.setState({ url: "https://api.myjson.com/bins/zyv02" });
    }
    this.fetchData();
  };

  searchBook = (value) => {
    this.setState({ searchValue: value });
  };

  language = (value) => {
    this.setState({ languageValue: value });
  };

  render() {
    const { searchValue, listBooks } = this.state;
    const lowercasedFilter = searchValue;
    const searchBooks = listBooks.filter((book) => {
      if (this.state.languageValue === "all" || "") {
        return Object.keys(book).some((key) =>
          book[key].includes(lowercasedFilter)
        );
      } else {
        return Object.keys(book).some(
          (key) =>
            book[key].toLowerCase().includes(lowercasedFilter) &&
            (book.language === this.state.languageValue ||
              book.idioma === this.state.languageValue)
        );
      }
    });

    return (
      <BrowserRouter>
        <div className="App">
          <Header
            /* url={this.url}
            searchBook={this.searchBook} */
            all={{
              url: this.url,
              searchBook: this.searchBook,
              language: this.language
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Bookstore searchBooks={searchBooks} {...this.props} />
            )}
          />
          <Route path="/:book_id" component={Book} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
