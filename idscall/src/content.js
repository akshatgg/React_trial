import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaTrashAlt } from 'react-icons/fa';

function Content({ updateBasketLength }) {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("data")) || [];
    setBasket(storedBasket);
  }, []);

  const pushToBasket = (id, checked, item, price) => {
    const newBasket = [...basket, { id, checked, item, price }];
    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length); // Notify App component
  };

  const storeBasket = (basketToStore) => {
    localStorage.setItem("data", JSON.stringify(basketToStore));
  };

  const toggleItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);

    if (updatedItems.find((item) => item.id === id).checked) {
      const selectedItem = updatedItems.find((item) => item.id === id);
      pushToBasket(id, true, selectedItem.item, selectedItem.price);
    } else {
      removeFromBasket(id);
    }
  };

  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length); // Notify App component
  };

  useEffect(() => {
    setItems([
      {
        id: 1,
        checked: false,
        item: "Old Mong",
        price: 1200,
      },
      {
        id: 2,
        checked: false,
        item: "Blue Lagoon",
        price: 450,
      },
      {
        id: 3,
        checked: false,
        item: "Buttvizer",
        price: 200,
      },
    ]);
  }, []);




  return (
    <div className="flex items-center my-4 justify-center">
    <div className="text-2xl flex items-center  justify-center h-44 border w-4/12  ">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <div className="flex space-x-1.5">
              <input
                type="checkbox"
                onClick={() => toggleItem(item.id)}
                checked={item.checked}
              />
              <label onClick={() => toggleItem(item.id)}>{item.item}</label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => removeFromBasket(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Content;
