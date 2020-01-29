import React from "react";
import { Link } from "react-router-dom";

function Bookstore(props) {
  const { searchBooks } = props;

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {searchBooks.map((book, i) => {
          return (
            <div className="card-wrapper" key={i}>
              <div className="card-holder my-4" key={i}>
                <div className="card-front d-flex flex-column align-items-center justify-content-center mr-0">
                  <Link to={{ pathname: "/" + i, state: { book } }}>
                    <img
                      className="card-img fluid px-2 align-self-center"
                      src={book.cover || book.portada}
                      alt="{book.title || book.titulo} cover"
                    />
                  </Link>
                  <div className="divider"></div>
                  <h5 className="card-title p-2 text-center align-self-baseline">
                    {i + 1}. {book.title || book.titulo}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookstore;
