import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content({ updateBasketLength,handleSubmit,items,setItems}) {
  
   [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      hidden: false,
      item: "Old Mong",
      price: 1200,
    },
    {
      id: 2,
      checked: false,
      hidden: false,
      item: "Blue Lagoon",
      price: 450,
    },
    {
      id: 3,
      checked: false,
      hidden: false,
      item: "Buttvizer",
      price: 200,
    },
  ]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("data")) || [];
    setBasket(storedBasket);
  }, []);

  const pushToBasket = (id, checked, item, price) => {
    const newBasket = [...basket, { id, checked, item, price }];
    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length);
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

  const hideItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, hidden: true } : item
    );
    setItems(updatedItems);
  };

  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length);
  };

  const HideandRemove=(id)=>{
    hideItem(id);
    removeFromBasket(id)
  }


 

  return (
    <div className="flex items-center my-4 justify-center">
      <div className="text-2xl flex items-center justify-center h-44 w-4/12">
        <ul>
          {items
            .filter((item) => !item.hidden)
            .map((item) => (
              <li key={`item-${item.id}`} className="item bg-gray-100 pl-9 pr-8 px-2 py-2 my-1  border-gray-500">
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
                    onClick={
                      ()=>HideandRemove(item.id)
                    }
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
