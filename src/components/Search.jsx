import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Books from "../BooksAPI";
import Book from "./Book";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const [bookResult, setBookResult] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (query) {
        Books.search(query).then((data) => {
            if (data.error) {
            setActive(false);
            } else {
            setBookResult(
                data.map((booksSearch) => {
                props.books.forEach((book) => {
                    if (booksSearch.id === book.id) {
                    booksSearch.shelf = book.shelf;
                    }
                });
                if (!booksSearch.imageLinks) {
                    booksSearch.imageLinks = "thumbnail";
                } else if (!booksSearch.imageLinks.thumbnail) {
                    booksSearch.imageLinks.thumbnail =
                    "https://react.semantic-ui.com/images/wireframe/image.png";
                }
                return booksSearch;
                })
            );
            setActive(true);
            }
        });
        } else {
        setActive(false);
        }
    }, [props.books, query]);
    return (
        <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">
            Close
            </Link>
            <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => setQuery(e.target.value)}
            />
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
            {active ? (
                bookResult.map((x) => {
                return (
                    <li key={x.id}>
                    <Book
                        title={x.title}
                        id={x.id}
                        img={
                        x.imageLinks.thumbnail ? x.imageLinks.thumbnail : "http"
                        }
                        authors={x.authors}
                        update={props.update}
                        shelf={x.shelf}
                        books={props.books}
                    />
                    </li>
                );
                })
            ) : (
                <div className="empty">
                    Search for a book
                </div>
            )}
            </ol>
        </div>
        </div>
    );
};

export default Search;
