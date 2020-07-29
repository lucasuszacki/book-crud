import React from "react";

import "../pages/home/Home.css";

const UserBook = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.books.length > 0 ? (
          props.books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(book);
                  }}
                  className="Edit-Btn"
                >
                  Editar
                </button>
                <button onClick={() => props.deleteBook(book.id)} className="Remove-Btn">
                  Excluir
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Sem livros</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserBook;
