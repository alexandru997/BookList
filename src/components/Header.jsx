import React from "react";

const Header = ({bookItems, handleAddBook}) => {

    return (
        <div>
            {bookItems.map((book) =>
                (
                    <>
                        <div key={book.id} className="book-list">
                            <div className="book-item">
                                <div className="book-item-cover">
                                    <img src={book.image} alt="book"/>
                                </div>
                                <div className="book-item-info">
                                    <ul className="book-item-list">
                                        <li className="book-item-list-name">
                                            <p>{book.title}</p>
                                        </li>
                                        <li className="book-item-list-author">{book.name}</li>
                                        <li className="book-item-list-price">${book.cost}</li>
                                        <li className="book-item-list-btn">
                                            <button onClick={()=>handleAddBook(book)}>Add to cart</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>

                ))}
        </div>
    );
};

export default Header;