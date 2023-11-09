// App.js
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {
  const [basketLength, setBasketLength] = useState(0);
  const [items, setItems] = useState([]);
  const [basket,setBasket]= useState([]);
  const [newitem, setnewitem] = useState(''); 

  const updateBasketLength = (length) => {
    setBasketLength(length);  
  };

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewitem = { id, checked: false, hidden: false, item };
    const mylistitem = [...items, mynewitem];
    console.log('Adding item:', mynewitem);
    setItems(mylistitem);
  localStorage.setItem('items',JSON.stringify(mylistitem))
  
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newitem) {
      return;
    }
    additem(newitem);
    console.log('Submitted:', newitem);
    setnewitem(''); // Clear the input field
  };
  

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newitem={newitem}
        setnewitem={setnewitem}
        handleSubmit={handleSubmit}
      />
      <Content
        updateBasketLength={updateBasketLength}
        items={items}
        setItems={setItems}
        basket={basket}
        setBasket={setBasket}
      />
      <Footer length={basketLength} />
    </div>
  );
}

export default App;
