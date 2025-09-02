function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Actors</h1>
          <p>List of actors fetched from an API</p>
        </div>
        <div className="col-4">
          <div className="box text-center">
            <h4>nome cognome</h4>
            <img src="https://cdn.bestmovie.it/wp-content/uploads/2021/06/GettyImages-512916978-scaled.jpg" alt="margot"/>
            <p><span>anno</span> e <span>nazionalità</span></p>
            <p>DESCRIZIONE</p>
            <p>MOVIES</p>
            <p>OSCAR</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
