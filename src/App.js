import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route Component={PageNotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
