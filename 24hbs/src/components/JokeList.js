import "./JokeList.css";
import nope from "../nope.gif";

import "./JokeItem";
import JokeItem from "./JokeItem";

function JokeList(props) {
  const jokes = props.jokes;
  console.log(jokes);

  return (
    <div className="JokeList">
      {(jokes && jokes.length === 0) ? (
        <>
          <h3>Nothing found</h3>
          <img src={nope} className="JokeList-nope" alt="nope" />
        </>
      ) : (
        jokes.map((joke) => <JokeItem key={joke.id} id={joke.id} joke={joke} />)
      )}
    </div>
  );
}

export default JokeList;
