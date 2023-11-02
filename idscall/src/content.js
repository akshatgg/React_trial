/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);

  // Load basket data from localStorage when the component mounts
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("data")) || [];
    setBasket(storedBasket);
  }, []);

  const pushToBasket = (id, checked, item, price) => {
    const newBasket = [...basket, { id, checked, item, price }];
    setBasket(newBasket);
    storeBasket(newBasket); // Update local storage after pushing an item
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
      pushToBasket(id, true, items.item, items.price);
    } else {
      removeFromBasket(id);
    }
  };

  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
    storeBasket(newBasket); // Update local storage after removing an item
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
    <div className="text-2xl flex items-center my-4 justify-center">
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
  );
}

export default Content;
