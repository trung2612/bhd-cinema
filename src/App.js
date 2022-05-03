import { Routes, Route } from "react-router-dom";
import HomeScreen from "./feature/HomeScreen/HomeScreen";
import MovieScreen from "feature/MovieScreen/MovieSreen";
import BookingScreen from "feature/BookingScreen/BookingScreen";
import SaleOffScreen from "feature/SaleOffScreen/SaleOffScree";
import LoginScreen from "feature/LoginScreen/LoginScreen";
import AboutUs from "feature/AboutUsScreen/AboutUs";
import MoviesScreen from "feature/MoviesScreen/MoviesScreen";
import RecruitScreen from "feature/RecruitScreen/RecruitScreen";
import SaleOffDetailScreen from "feature/SaleOffDetailScreen/SaleOffDetailScreen";
import RapsScreen from "feature/RapsScreen/SaleOffScree";
import RapScreen from "feature/RapScreen/SaleOffDetailScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/movie/:id" element={<MovieScreen />}></Route>
        <Route path="/movie/:id/booking" element={<BookingScreen />}></Route>
        <Route path="/saleoff" element={<SaleOffScreen />}></Route>
        <Route path="/saleoff/:id" element={<SaleOffDetailScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/ve-chung-toi" element={<AboutUs />}></Route>
        <Route path="/movie" element={<MoviesScreen />}></Route>
        <Route path="/tuyen-dung" element={<RecruitScreen />}></Route>
        <Route path="/he-thong-rap" element={<RapsScreen />}></Route>
        <Route path="/he-thong-rap/:id" element={<RapScreen />}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
