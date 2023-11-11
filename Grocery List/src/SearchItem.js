import React from 'react'

function SearchItem({search,setsearch}) {
  return (
    <form className='searchitem grid grid-row-1 grid-cols-12 gap-2 ' onSubmit={(e)=>e.preventDefault() }>
     <input
     className='col-start-6 col-span-2 h-8 text-xl mt-2 border border-gray-900 rounded-lg'
     id='search'
     type='text'
     role='searchbox'
     placeholder='Search Items'
     value={search}
     onChange={(e)=> setsearch(e.target.value)}
     />
    </form>
  )
}

export default SearchItem