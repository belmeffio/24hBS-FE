import './JokeList.css'

import './JokeItem'
import JokeItem from './JokeItem';

function JokeList() {
  return (
    <div className="JokeList">
      <JokeItem></JokeItem>
    </div>
  );
}

export default JokeList;