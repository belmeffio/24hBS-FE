// Modules
import { useState } from "react";
import axios from "axios";

// Styles
import logo from "./logo.svg";
import "./App.css";

// Components
import SearchBox from "./components/SearchBox";
import JokeList from "./components/JokeList";

// Just for developing
const DUMMY_JOKES = [
  {
    categories: [],
    created_at: "2020-01-05 13:42:28.420821",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "rqk9BuQLSx2ltHgvO7JqSg",
    updated_at: "2020-01-05 13:42:28.420821",
    url: "https://api.chucknorris.io/jokes/rqk9BuQLSx2ltHgvO7JqSg",
    value:
      "Chuck Norris trained his pet mountain lions to nurse baby sheep and later fed them back to the mountain lions thus perpetuating mountain lion existence.",
  },
  {
    categories: [],
    created_at: "2020-01-05 13:42:28.984661",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "FIPHbmzvThGAWr2V6BuqLg",
    updated_at: "2020-01-05 13:42:28.984661",
    url: "https://api.chucknorris.io/jokes/FIPHbmzvThGAWr2V6BuqLg",
    value:
      "Chuck Norris is so much trained in military tacticts 'that' once he killed an terrorist in afghanistan through bluetooth",
  },
  {
    categories: [],
    created_at: "2020-01-05 13:42:30.480041",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "lP6V4K5cT0CM8RXH1MqESA",
    updated_at: "2020-01-05 13:42:30.480041",
    url: "https://api.chucknorris.io/jokes/lP6V4K5cT0CM8RXH1MqESA",
    value:
      "Chuck Norris measurments are 10000-9000-30000000000000 the bottom piece is more bigger because he is best trained foot fighter(roundhousekick)",
  },
  {
    categories: [],
    created_at: "2020-01-05 13:42:30.480041",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "kSvq4aCoS5SYSuVrNi1DHg",
    updated_at: "2020-01-05 13:42:30.480041",
    url: "https://api.chucknorris.io/jokes/kSvq4aCoS5SYSuVrNi1DHg",
    value:
      "Chuck Norris can catch a train, i feel sorry for the person who has to throw it to him.",
  },
];

function App() {
  const [jokes, setJokes] = useState(DUMMY_JOKES);

  const fetchJoke = (query) => {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    console.log(url);
    return axios
      .get(url)
      .then((response) =>{
        setJokes(response.data.result);
      });
  };

  const searchHandler = (val) => {
    console.log(`searching: ${val}`);
    if (val.length > 2) {
      fetchJoke(val);
    }
    else {
      setJokes([])
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>24ore Business School Frontend-test</p>
      </header>
      <div className="App-content">
        <SearchBox onSearch={searchHandler}></SearchBox>
        <JokeList jokes={jokes} />
      </div>
    </div>
  );
}

export default App;
