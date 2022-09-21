import React from "react";

const Book = (props) => {
    return (
        <div className="book">
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${props.img})`,
            }}
            ></div>
            <div className="book-shelf-changer">
            <select
                onChange={(e) => {
                props.update(props, e.target.value);
                }}
                value={props.shelf ? props.shelf : "none"}
            >
                <option className="moveTo" value="move" disabled>
                Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
        <div className="book-authors">{props.shelf ? props.shelf : "none"}</div>
        </div>
    );
};

export default Book;
