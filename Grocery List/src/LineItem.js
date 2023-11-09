import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function LineItem({ toggleItem, item, HideandRemove }) {
  return (
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
          onClick={() => HideandRemove(item.id)}
        />
      </div>
    </li>
  );
}

export default LineItem;
