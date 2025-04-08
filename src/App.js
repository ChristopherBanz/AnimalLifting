import './App.css';
import Image from './opossum.jpg';
import Searchbar from './components/searchbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Image} className="App-logo" alt="logo" />
        <p>
          What Kind of Animals are You Lifting???
        </p>
        <Searchbar/>
      </header>
    </div>
  );
}

export default App;
