import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/" element={}></Route>
      <Route path="/" element={}></Route>
      <Route path="/" element={}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
