import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import * as Books from "./BooksAPI";
import "./App.css";


const App = () => {
  const [books, setBooks] = useState([]);
  const updateState = async (book, shelf) => {
    await Books.update(book, shelf);
    await Books.getAll().then((data) => setBooks(data));
  };

  useEffect(() => {
    Books.getAll().then((data) => setBooks(data));
    console.log(Books.getAll());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          key={1}
          path="/"
          exact
          element={<Home books={books} update={updateState} />}
        />
        <Route
          key={2}
          path="search"
          element={<Search books={books} update={updateState} />}
        />
      </Routes>
    </div>
  );
}

export default App;

