import "./JokeList.css";
import nope from "../nope.gif";

import "./JokeItem";
import JokeItem from "./JokeItem";

function JokeList(props) {
  // get the data from the prop
  const jokes = props.jokes;
  // check length of the data array
  const thereAreJokes = jokes && jokes.length > 0;

  return (
    <div className="JokeList">
      {/* Write the title based on the data given */}
      <h3 className="JokeList-title">
        {props.random && thereAreJokes && "Random joke!"}
        {!props.random && thereAreJokes && "Found these jokes"}
        {!thereAreJokes && "No jokes D:"}
      </h3>
      {/* Print the jokes or the no-content message */}
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
