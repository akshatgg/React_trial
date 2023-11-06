import React from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem() {
  return (
    <form className='grid grid-row-1 grid-cols-12 gap-2 mt-3'>
      <label htmlFor='additems'></label>
      <input
        className='col-start-6 col-span-2 h-8 text-xl border border-gray-900 rounded-lg' // Added border classes
        id='additem'
        type='text'
        placeholder='Add Items'
        required
        autoFocus
      />
      <button
        className='border border-gray-900  w-5 rounded-md h-8 hover:bg-gray-200' // Added border classes
        type='submit'
        aria-label='Add Item'
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
