import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actors, setActors] = useState([]);
  const [search, setSearch] = useState("");
  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActors(resp.data);
    });
  };
  useEffect(fetchActors, []);
  // bonus-----------------------------------------------------
  useEffect(() => {
    console.log("stai scrivendo nell'input");
  }, [search]);

  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(search.toLowerCase())
  );
// ------------------------------------------------------------
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Actors</h1>
          <p>List of actors fetched from an API</p>
          <input
            type="text"
            placeholder="Cerca per nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredActors.map((actor) => {
          const {
            id,
            name,
            image,
            birth_year,
            nationality,
            biography,
            most_famous_movies,
            awards,
          } = actor;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 gy-4" key={id}>
              <div className="box text-center h-100 p-2">
                <h3 className="text-uppercase">{name}</h3>
                <img src={image} alt="" />
                <p>
                  <span>{birth_year}</span> <span>{nationality}</span>
                </p>
                <p>{biography}</p>
                <p className="text-danger">
                  Known for: <br></br> {most_famous_movies}
                </p>
                <p className="text-warning">{awards}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
