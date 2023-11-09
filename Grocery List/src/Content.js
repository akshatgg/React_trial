import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function Content({ updateBasketLength }) {
  const [items, setItems] = useState([
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

  const HideandRemove = (id) => {
    hideItem(id);
    removeFromBasket(id);
  };

  return <ItemList items={items} toggleItem={toggleItem} HideandRemove={HideandRemove} />;
}

export default Content;
