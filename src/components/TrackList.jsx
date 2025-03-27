import React, { useState } from "react";
import useTrackStore from "../store/store";
import "./styles.css"; // Импортируем стили

const TrackList = () => {
  const { tracks, addTrack, removeTrack, sortTracks } = useTrackStore();
  const [newTrack, setNewTrack] = useState({ name: "", artist: "" });
  const [searchArtist, setSearchArtist] = useState("");

  // Фильтрация треков по исполнителю
  const filteredTracks = tracks.filter((track) =>
    track.artist.toLowerCase().includes(searchArtist.toLowerCase())
  );

  const handleAddTrack = () => {
    if (newTrack.name && newTrack.artist) {
      const track = {
        id: Date.now(),
        name: newTrack.name,
        artist: newTrack.artist,
      };
      addTrack(track);
      setNewTrack({ name: "", artist: "" });
    }
  };

  const handleSearchChange = (e) => {
    setSearchArtist(e.target.value);
  };

  return (
    <div className="container">
      <h1>Список треков</h1>

      <div className="search-group">
        <input
          type="text"
          placeholder="Поиск по исполнителю"
          value={searchArtist}
          onChange={handleSearchChange}
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Название трека"
          value={newTrack.name}
          onChange={(e) => setNewTrack({ ...newTrack, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Исполнитель"
          value={newTrack.artist}
          onChange={(e) => setNewTrack({ ...newTrack, artist: e.target.value })}
        />
        <button onClick={handleAddTrack}>Добавить трек</button>
      </div>

      <button className="sort-button" onClick={sortTracks}>
        Сортировать по имени
      </button>

      <ul className="track-list">
        {filteredTracks.map((track) => (
          <li key={track.id}>
            <span>
              {track.name} - {track.artist}
            </span>
            <button onClick={() => removeTrack(track.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
