import Footer from "./Footer";
import Header from "./Header";
import Content from "./content";

function App() {
  return (
    <div className="App">
      <Header  title="Grocery list"/>
      <Content />
      <Footer footer="Copyright @ 2023" />
    </div>
  );
}

export default App;
