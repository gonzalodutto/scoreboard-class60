import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const onClickNewPlayer = (event) => {
    event.preventDefault();
    props.createNewPlayer(name);
  };

  return (
    <div className="AddPlayerForm">
      <form onSubmit={onClickNewPlayer}>
        <p>
          New player:{" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />{" "}
          <button onClick={onClickNewPlayer}>Add</button>
        </p>
      </form>
    </div>
  );
}
