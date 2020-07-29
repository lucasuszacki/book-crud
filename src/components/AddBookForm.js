import React, { useState } from "react";

import "../pages/home/Home.css";

const AddBookForm = (props) => {
  const initialFormState = { id: Math.random(), author: "", title: "" };
  const [book, setBook] = useState(initialFormState);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!book.author || !book.title) return;

        props.addBook(book);
        setBook(initialFormState);
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Título"
        className="Input-Field"
        value={book.title}
        onChange={({ target }) => setBook({ ...book, title: target.value })}
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        className="Input-Field"
        value={book.author}
        onChange={({ target }) => setBook({ ...book, author: target.value })}
      />
      <button className="Add-Btn">Adicionar</button>
    </form>
  );
};

export default AddBookForm;
