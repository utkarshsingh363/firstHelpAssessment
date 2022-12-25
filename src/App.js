import "./App.css";
import CategoryNav from "./Components/CategoryNav";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNav />
      <MovieList />
      {/* <Checkout /> */}
    </div>
  );
}

export default App;
