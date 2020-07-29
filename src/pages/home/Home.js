import React, { useState, useEffect, Fragment } from "react";
import AddBookForm from "../../components/AddBookForm";
import EditBookForm from "../../components/EditBookForm";
import BookTable from "../../components/BookTable";
import { getBooks, updateBook, addBook, deleteBook } from "../../services/bookService";

import "./Home.css";

const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [editing, setEditing] = useState(false);
  const [update, setUpdate] = useState(false);

  const getBooksAPI = async () => {
    setUpdate(false);
    try {
      const { data } = await getBooks();

      setBooksData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addBookAPI = async (book) => {
    try {
      const { status } = await addBook(book);

      if (status === 201) {
        setUpdate(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateBookAPI = async (id, updatedBook) => {
    try {
      const { status } = await updateBook(id, updatedBook);

      if (status === 200) {
        setUpdate(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookAPI = async (id) => {
    try {
      const { status } = await deleteBook(id);

      if (status === 200) {
        setUpdate(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooksAPI();
  }, [update]);

  const editRow = (book) => {
    setEditing(true);
    setCurrentBook(book);
  };

  return (
    <div className="container">
      <h1>CRUD SoftDesign </h1>
      <div>
        {editing ? (
          <Fragment>
            <h2>Editar Livro</h2>
            <EditBookForm
              editing={editing}
              setEditing={setEditing}
              currentBook={currentBook}
              updateBook={updateBookAPI}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Adicionar Livro</h2>
            <AddBookForm addBook={addBookAPI} />
          </Fragment>
        )}
      </div>
      <div>
        <BookTable books={booksData} editRow={editRow} deleteBook={deleteBookAPI} />
      </div>
    </div>
  );
};

export default Home;
