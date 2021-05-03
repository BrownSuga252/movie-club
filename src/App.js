import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movie from "./components/Movie";
import MovieLister from "./components/MovieLister";

function App() {

  return (
    <div className="App">

      <div className="Movie">

        <Switch>
          <Route exact path="/"> <MovieLister>
          </MovieLister></Route>
          <Route exact path="/:id">
            <Movie ></Movie>
          </Route>
        </Switch>
      </div>

    </div>

  );
}

export default App;
