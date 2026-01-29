import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Homenull from "./components/Homenull";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homenull/>}></Route>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
