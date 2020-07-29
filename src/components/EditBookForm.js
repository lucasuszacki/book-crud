import React, { useState, useEffect } from "react";

import "../pages/home/Home.css";

const EditBookForm = (props) => {
  const [book, setBook] = useState(props.currentBook);

  useEffect(() => {
    setBook(props.currentBook);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBook({ ...book, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log("props", props);

        props.updateBook(book.id, book);
      }}
    >
      <input type="text" name="title" className="Input-Field" value={book.title} onChange={handleInputChange} />
      <input type="text" name="author" className="Input-Field" value={book.author} onChange={handleInputChange} />
      <button className="Add-Btn">Atualizar</button>
      <button className="Remove-Btn" onClick={() => props.setEditing(false)}>
        Cancelar
      </button>
    </form>
  );
};

export default EditBookForm;
