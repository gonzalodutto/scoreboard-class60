export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score}) id: {props.id}
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}
