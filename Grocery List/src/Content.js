import React from 'react';
import ItemList from './ItemList';
import "./content.css";

function Content({ updateBasketLength,items,toggleItem,HideandRemove}) {
 

  return <ItemList items={items} toggleItem={toggleItem} HideandRemove={HideandRemove} />;
}

export default Content;
