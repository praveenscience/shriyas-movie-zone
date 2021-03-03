import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./Header";
import Movies from "../constants/Movies.json";

const Welcome = () => (
  <>
    <h1>Welcome to Shriya's Movie Zone</h1>
    <p className="h5 mt-4">
      Please click on a movie on the left to know more details!
    </p>
  </>
);

const MoviePage = ({ title, rank, id }) => (
  <>
    <h1>
      Movie: {title}
      <span className="ml-3 badge badge-primary badge-pill">#{rank}</span>
    </h1>
    <p className="h5 mt-4">
      Check this movie out on{" "}
      <a href={`https://www.imdb.com/title/${id}/`}>IMDb</a>.
    </p>
  </>
);

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header dark={true} to="/">
          Shriya's Movie Zone
        </Header>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="list-group">
                {Movies.map((movie, key) => (
                  <Link
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    to={"/movie/" + movie.id}
                    key={key}
                  >
                    {movie.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-12 col-sm-8">
              <Switch>
                <Route
                  path="/movie/:movieId"
                  render={(rp) => {
                    const movie = Movies.find(
                      (m) => m.id === rp.match.params.movieId
                    );
                    return (
                      <MoviePage
                        title={movie.title}
                        rank={movie.rank}
                        id={rp.match.params.movieId}
                      />
                    );
                  }}
                />
                <Route path="/" component={Welcome} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
