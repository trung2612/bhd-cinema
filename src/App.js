import { Routes, Route } from "react-router-dom";
import HomeScreen from "./feature/HomeScreen/HomeScreen";
import MovieScreen from "feature/MovieScreen/MovieSreen";
import BookingScreen from "feature/BookingScreen/BookingScreen";
import SaleOffScreen from "feature/SaleOffScreen/SaleOffScree";
import LoginScreen from "feature/LoginScreen/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/movie/:id" element={<MovieScreen />}></Route>
        <Route path="/movie/:id/booking" element={<BookingScreen />}></Route>
        <Route path="/saleoff" element={<SaleOffScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
