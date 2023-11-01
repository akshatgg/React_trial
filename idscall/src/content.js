/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "old Mong",
      price: 1200
    },
    {
      id: 2,
      checked: false,
      item: "Blue lagoon",
      price: 450
    },
    {
      id: 3,
      checked: false,
      item: "Buttvizer",
      price: 200
    }
  ]);

  let basket = JSON.parse(localStorage.getItem("data")) || [];

  let push = (id, checked, item, price) => {
    basket.push({
      id: id,
      checked: checked,
      item: item,
      price: price,
    });
  };

  let store = () => {
    localStorage.setItem("data", JSON.stringify(basket));
  };

  const check = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const remove = (id) => {
    basket = basket.filter((item) => item.id !== id);
    store(); // Update local storage after removing an item
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <div className="flex space-x-1.5">
              <input
                type="checkbox"
                onClick={() => {
                  check(item.id);
                  push(item.id, !item.checked, item.item, item.price);
                  store();
                }}
                checked={item.checked}
              />
              <label onClick={() => check(item.id)}>{item.item}</label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => {
                  remove(item.id);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
