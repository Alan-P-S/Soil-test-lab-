import { useState } from "react";

let nextId = 0;

function ListAdding() {
  const [name, setName] = useState("");
  const [artists, setArtist] = useState([]);
  return (
    <>
      <h1>Inspiring Artists: </h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          setArtist([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListAdding;
