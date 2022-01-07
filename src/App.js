import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import { useState } from "react";

import "./App.css";
import { data } from "./components/data";

function App() {
  const { bookItems } = data;
  const [bookItem, setBookItem] = useState([]);
  const handleAddBook = (book) => {
    const ListItem = bookItem.find((item) => item.id === book.id);
    if (ListItem) {
      setBookItem(
        bookItem.map((item) =>
          item.id === book.id
            ? {
                ...ListItem,
                count: ListItem.count + 1,
              }
            : item
        )
      );
    } else {
      setBookItem([...bookItem, { ...book, count: 1 }]);
    }
  };
  const handleRemoveBook = (book) => {
    const ListItem = bookItem.find((item) => item.id === book.id);
    if (ListItem.count === 1) {
      setBookItem(bookItem.filter((item) => item.id !== book.id));
    } else {
      setBookItem(
        bookItem.map((item) =>
          item.id === book.id
            ? { ...ListItem, count: ListItem.count - 1 }
            : item
        )
      );
    }
  };
  const handleDelete = (book) => {
    const ListItem = bookItem.find((item) => item.id === book.id);
    if (ListItem.count >= 1) {
      setBookItem(bookItem.filter((item) => item.id !== book.id));
    }
  };
  return (
    <>
      <Header bookItems={bookItems} handleAddBook={handleAddBook} />
      <ShoppingList
        bookItem={bookItem}
        handleAddBook={handleAddBook}
        handleRemoveBook={handleRemoveBook}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
