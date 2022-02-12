import './JokeItem.css'

function JokeItem(props) {
  const joke = props.joke;

  return (
    <div className="JokeItem">
      <img src={joke.icon_url} alt={`Joke PIC`}></img>
      <h3>Chuck Norris FACT</h3>
      <p>{joke.value}</p>
      <a href={joke.url}>The original</a>
    </div>
  );
}

export default JokeItem;