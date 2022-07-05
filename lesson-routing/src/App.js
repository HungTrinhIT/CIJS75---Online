import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
  / => Homeapge
  /movies => MovieList
  /login => Login
  /Signup => Signup
*/
