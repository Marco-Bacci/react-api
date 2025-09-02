import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actors, setActors] = useState([]);
  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActors(resp.data);
    });
  };
  useEffect(fetchActors, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Actors</h1>
          <p>List of actors fetched from an API</p>
        </div>

        {actors.map((actor) => {
          return (
            <div className="col-4">
              <div className="box text-center">
                <h4>{actor.name}</h4>
                <img src={actor.image} alt="" />
                <p>
                  <span>{actor.birth_year}</span>{" "}
                  <span>{actor.nationality}</span>
                </p>
                <p>{actor.biography}</p>
                <p>{actor.most_famous_movies}</p>
                <p>{actor.awards}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
