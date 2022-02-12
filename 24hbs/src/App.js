// Modules
import { useState, useEffect } from "react";
import axios from "axios";

// Styles
import logo from "./logo.svg";
import "./App.css";

// Components
import SearchBox from "./components/SearchBox";
import JokeList from "./components/JokeList";


function App() {
  // The array with the jokes
  const [jokes, setJokes] = useState([]);
  // This is given to the list component to tell if the data given is random, or filtered with the user input
  const [isRandom, setIsRandom] = useState(true);
  // This is true when the jokes are being fetched
  const [isLoading, setIsLoading] = useState(true);
  // If this is true the loop of random jokes ends
  const [loopingId, setLoopingId] = useState();

  // Function to get data from the API
  const fetchJoke = (query) => {
    // Set the state to loading
    setIsLoading(true);
    // Get the endpoint
    const endpoint = query !== "" ? `/search?query=${query}` : "random";
    const url = `https://api.chucknorris.io/jokes/${endpoint}`;
    // Fetch data
    return axios.get(url).then((response) => {
      // When data are fetched, set them in the state
      setJokes(response.data.result ? response.data.result : [response.data]);
      // Content is loaded
      setIsLoading(false);
    });
  };

  // Handles the user input and starts the fetch for data
  const searchHandler = (val) => {
    // if the user input is long enough, fetch with query.. 
    if (val.length > 2) {
      setIsRandom(false);
      // Stop the random loop
      stopLoopFetch();
      fetchJoke(val);
    } else {
      // ...otherwise get a random joke
      setIsRandom(true);
      fetchJoke("");
      if(!isRandom) {
        // if we are not already in random loop, start it!
        loopFecth();
      }
    }
  };

  // Loops the fetch for random jokes
  const loopFecth = () => {
    const interval = setInterval(() => {
    setLoopingId(interval);
      fetchJoke("");
    }, 3000);
    // set the id of the loop, to stop when needed
    setLoopingId(interval);
    return interval;
  }

  // Just stops the loop
  const stopLoopFetch = () => {
    clearInterval(loopingId);
  }

  // Starts the app getting a first random joke and starts the loop
  useEffect(() => {
    fetchJoke("");

    const interval = loopFecth();
    setLoopingId(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://api.chucknorris.io/"><img src={logo} className="App-logo" alt="logo" /></a>
        <p>24ore Business School Frontend-test</p>
      </header>
      <div className="App-content">
        <SearchBox onSearch={searchHandler}></SearchBox>
        {/* If this is loading do not show content but the load message */}
        {isLoading ? (
          <h3>Loading..</h3>
        ) : (
          <JokeList jokes={jokes} random={isRandom} />
        )}
      </div>
    </div>
  );
}

export default App;
