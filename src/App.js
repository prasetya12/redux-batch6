import './App.css';
import Header from './components/Header'
import ListProduct from './components/ListProduct';
function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <ListProduct />
      </div>
    </>
  );
}

export default App;
