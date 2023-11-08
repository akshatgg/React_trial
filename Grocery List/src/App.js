import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./content";
import AddItem from "./AddItem";

function App() {
  // Initialize basket length state
  const [basketLength, setBasketLength] = useState(0);
  const [items,setItems]=useState([])
  // Define state for the new item and its setter
  const [newitem, setNewitem] = useState([]); // Define newitem and setNewitem


  // Function to update basket length
  const updateBasketLength = (length) => {
    setBasketLength(length);
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!newitem) {
      return
    }
    setNewitem('')

  }


  const additem = (item)=>{
    const id=item.length ? items[items.length-1].id+1:1;
  }
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newitem={newitem}
        setnewitem={setNewitem}
        handleSubmit={handleSubmit} // Pass the handleSubmit function and its properties
      />
      <Content
        updateBasketLength={updateBasketLength}
        items={items}
        setItems={setItems}
      />


      <Footer length={basketLength} />
    </div>
  );
}

export default App;
