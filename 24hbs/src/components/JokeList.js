import "./JokeList.css";

import "./JokeItem";
import JokeItem from "./JokeItem";

function JokeList(props) {
  return (
    <div className="JokeList">
      {props.jokes.map((joke) => (
        <JokeItem key={joke.id} id={joke.id} joke={joke} />
      ))}
    </div>
  );
}

export default JokeList;
