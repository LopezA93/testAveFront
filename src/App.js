import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import data from './services/books.json'

import SearchBar from './components/Navbar/SearchBar';

function App() {
  return (
    <>
    {/* <SearchBar data={data}/> */}
    <ItemListContainer/>
    </>
  );
}

export default App;
