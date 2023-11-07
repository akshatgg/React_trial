import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./content";
import AddItem from "./AddItem";

function App() {
  // Initialize basket length state
  const [basketLength, setBasketLength] = useState(0);

  // Define state for the new item and its setter
  const [newitem, setNewitem] = useState([]); // Define newitem and setNewitem

  // Function to update basket length
  const updateBasketLength = (length) => {
    setBasketLength(length);
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newitem={newitem}       
        setnewitem={setNewitem} 
      />
      <Content updateBasketLength={updateBasketLength} />
      <Footer length={basketLength} />
    </div>
  );
}

export default App;
