import React, { useState } from "react";

const AddTrack = ({ addTrack }) => {
  const [newTrack, setNewTrack] = useState({
    id: "",
    name: "",
    genre: "",
    artist: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrack({ ...newTrack, id: Date.now() });
    setNewTrack({ id: "", name: "", genre: "", artist: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={newTrack.name}
        onChange={(e) => setNewTrack({ ...newTrack, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Жанр"
        value={newTrack.genre}
        onChange={(e) => setNewTrack({ ...newTrack, genre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Исполнитель"
        value={newTrack.artist}
        onChange={(e) => setNewTrack({ ...newTrack, artist: e.target.value })}
      />
      <button type="submit">Добавить трек</button>
    </form>
  );
};

export default AddTrack;
