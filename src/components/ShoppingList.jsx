import React from "react";

const ShoppingList = ({
  bookItem,
  handleAddBook,
  handleRemoveBook,
  handleDelete,
}) => {
  const total = bookItem.reduce(
    (price, item) => price + item.count * item.cost,
    0
  );
  return (
    <>
      <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <ul className="shopping-header">
          <li>#</li>
          <li>item</li>
          <li>count</li>
          <li>price</li>
          <li>action</li>
        </ul>
        {bookItem.length === 0 && (
          <span className="orderShop">Your order is empty</span>
        )}
        <>
          {bookItem.map((item) => (
            <div key={item.id}>
              <div className="shopping-conatiner">
                <ul className="shopping-body">
                  <li>{item.id}</li>
                  <li className="title">{item.title}</li>
                  <li>{item.count}</li>
                  <li>{item.count * item.cost}</li>
                  <li>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleRemoveBook(item)}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddBook(item)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </>

        <div className="total">
          Total: $ <span>{total}</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
