import { Routes, Route } from "react-router-dom";
import HomeScreen from "./feature/HomeScreen/HomeScreen";
import MovieScreen from "feature/MovieScreen/MovieSreen";
import BookingScreen from "feature/BookingScreen/BookingScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/movie/:id" element={<MovieScreen />}></Route>
        <Route path="/movie/:id/booking" element={<BookingScreen />}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
