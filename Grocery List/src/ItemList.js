import React from 'react';
import LineItem from './LineItem';

function ItemList({ items, toggleItem, HideandRemove }) {
  return (
    <div className="flex items-center my-4 justify-center">
      <div className="text-2xl flex items-center justify-center h-44 w-4/12">
        <ul>
          {items
            .filter((item) => !item.hidden)
            .map((item) => (
              <LineItem
                key={item.id}
                toggleItem={toggleItem}
                HideandRemove={HideandRemove}
                item={item}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
