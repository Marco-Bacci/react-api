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
          const {id, name, image, birth_year, nationality, biography, most_famous_movies, awards } = actor
          return (
            <div className="col-4 gy-4">
              <div className="box text-center h-100" key = {id}>
                <h4>{name}</h4>
                <img src={image} alt="" />
                <p>
                  <span>{birth_year}</span>{" "}
                  <span>{nationality}</span>
                </p>
                <p>{biography}</p>
                <p>{most_famous_movies}</p>
                <p>{awards}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
