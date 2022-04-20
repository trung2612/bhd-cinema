import { Routes, Route } from "react-router-dom";
import HomeScreen from "./feature/HomeScreen/HomeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
