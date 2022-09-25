import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import DataFromOwnedApi from './components/DataFromOwnedApi/DataFromOwnedApi';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <DataFromOwnedApi></DataFromOwnedApi>
    </div>
  );
}

export default App;
