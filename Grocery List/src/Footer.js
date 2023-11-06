import React from 'react';

function Footer({ length }) {
  return (
    <div className='bg-slate-500 h-8 text-center text-xl'>
      {length} List items
    </div>
  );
}

export default Footer;
