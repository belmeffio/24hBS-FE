import logo from './logo.svg';
import './App.css';

// Components
import SearchBox from './components/SearchBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          24ore Business School Frontend-test
        </p>
      </header>
      <div className='App-content'>
        <SearchBox></SearchBox>
      </div>
    </div>
  );
}

export default App;
