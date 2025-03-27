import React from "react";
import useTrackStore from "../store/store";

const Filters = () => {
  const sortTracksBy = useTrackStore((state) => state.sortTracksBy);
  const filterTracksByGenre = useTrackStore(
    (state) => state.filterTracksByGenre
  );
  const filterTracksByArtist = useTrackStore(
    (state) => state.filterTracksByArtist
  );

  return (
    <div>
      <h3>Фильтры</h3>
      <button onClick={() => sortTracksBy("name")}>
        Сортировать по названию
      </button>
      <button onClick={() => filterTracksByGenre("Pop")}>
        Фильтровать по жанру: Pop
      </button>
      <button onClick={() => filterTracksByArtist("Artist Name")}>
        Фильтровать по исполнителю
      </button>
    </div>
  );
};

export default Filters;
