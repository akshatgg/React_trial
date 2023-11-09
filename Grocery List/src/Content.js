import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function Content({ updateBasketLength,items,toggleItem,HideandRemove}) {
 

  return <ItemList items={items} toggleItem={toggleItem} HideandRemove={HideandRemove} />;
}

export default Content;
