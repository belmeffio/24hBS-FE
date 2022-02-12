import "./JokeList.css";
import nope from "../nope.gif";

import "./JokeItem";
import JokeItem from "./JokeItem";

function JokeList(props) {
  const jokes = props.jokes;
  const thereAreJokes = jokes && jokes.length > 0;

  return (
    <div className="JokeList">
      <h3 className="JokeList-title">
        {props.random && thereAreJokes && "Random joke!"}
        {!props.random && thereAreJokes && "Found these jokes"}
        {!thereAreJokes && "No jokes D:"}
      </h3>
      {(jokes && jokes.length === 0) ? (
        <>
          <img src={nope} className="JokeList-nope" alt="nope" />
        </>
      ) : (
        jokes.map((joke) => <JokeItem key={joke.id} id={joke.id} joke={joke} />)
      )}
    </div>
  );
}

export default JokeList;
