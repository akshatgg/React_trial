import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./content";

function App() {
  // Initialize basket length state
  const [basketLength, setBasketLength] = useState(0);

  // Function to update basket length
  const updateBasketLength = (length) => {
    setBasketLength(length);
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content updateBasketLength={updateBasketLength} />
      <Footer length={basketLength} />
    </div>
  );
}

export default App;
