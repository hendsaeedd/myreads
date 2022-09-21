import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Hoom = (props) => {
    return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>
            <span className="title">My</span>Reads
            </h1>
        </div>
        <div className="list-books-content">
            <Shelf
            name="Currently Reading"
            books={props.books}
            id="1"
            category="currentlyReading"
            update={props.update}
            />
            <Shelf
            name="Want to Read"
            books={props.books}
            id="2"
            category="wantToRead"
            update={props.update}
            />
            <Shelf
            name="Read"
            books={props.books}
            id="3"
            category="read"
            update={props.update}
            />
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
        </div>
    );
};

export default Hoom;
