import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <div className='text-8xl'><Header /></div>
      <div className='text-3xl'><Content /></div>
      <div className='text-3xl'><Footer /></div>
    </div>
  );
}

export default App;
