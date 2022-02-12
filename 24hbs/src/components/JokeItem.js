import './JokeItem.css'

function JokeItem(props) {
  return (
    <div className="JokeItem">
      <img src={props.icon_url} alt={`Joke PIC`}></img>
      <h3>Chuck Norris FACT</h3>
      <p>{props.value}</p>
      <a src={props.url} target="_blank">The original</a>
    </div>
  );
}

export default JokeItem;