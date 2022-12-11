import { useState } from "react";
import "./App.css";
import CallApi from "./components/CallApi";
import FormControl from "./components/FormControl";
import MovieList from "./components/MovieList";
import Speedometer from "./components/Seepdometer";
import UseRefHook from "./components/UseRefHook";

function App() {
  const movies = [
    {
      id: 1,
      name: "naruto 1",
    },
    {
      id: 2,
      name: "naruto 2",
    },
    {
      id: 3,
      name: "naruto 3",
    },
    {
      id: 4,
      name: "naruto 4",
    },
  ];

  const name = "phan phú đạt";
  const [isDisplay, setIsDisplay] = useState(false);

  const clickDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
  };

  return (
    <div className="App">
      <div className="listMovies">
        <div className="listMovies__contai">
          <h2>{name}</h2>
          {isDisplay ? (
            <button onClick={clickDisplay}>Hide</button>
          ) : (
            <button onClick={clickDisplay}>DisPlay</button>
          )}
          {isDisplay && <MovieList movies={movies} handleClick={handleClick} />}
        </div>
      </div>

      {/* <div className="speedometer">
        <Speedometer />
      </div>

      <div className="apiCalling">
        <CallApi />
      </div> */}

      <div className="form__controlling">
        <FormControl />
      </div>
    </div>
  );
}

export default App;
