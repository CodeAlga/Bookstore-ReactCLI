import React from "react";
import { Link } from "react-router-dom";

function Book(props) {
  const book = props.location.state.book;

  return (
    <div>
      <div className="card-detail d-flex align-items-center mt-5">
        <div className="card-holder d-flex flex-row align-items-center">
          <img
            className="card-img fluid m-2 align-self-center"
            src={book.detail || book.detalle}
            alt={`${book.titulo} || ${book.title} cover`}
          />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h5 className="card-title p-2 text-center">
              {book.title || book.titulo}
            </h5>
            <div className="divider"></div>

            <p className="card-text p-4">
              {book.description || book.descripcion}
            </p>
            <div>
              <Link to={{ pathname: "/" }}>
                <button
                  type="button"
                  value="en"
                  variant="success"
                  className="btn-success btn-lg m-2"
                >
                  <span aria-label="English" role="img">
                    Go Back
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
