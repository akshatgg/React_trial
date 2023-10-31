/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
function content() {
    const [items, setitems] = useState([
        {
id:1,
checked:false,
item:"old Mong",
price:1200     
},

{
    id:2,
    checked:false,
    item:"Blue lagoon",
    price:450    
    },

    {
        id:3,
        checked:false,
        item:"Buttvizer",
        price:200    
        },

    ])
  return (
    <div>
        {items.map((item)=>{
            <li></li>
        })}
    </div>
  )
}

export default content