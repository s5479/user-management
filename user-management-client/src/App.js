import "./App.css";
import AllUser from "./components/AllUser";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./components/UserInfo";
import EditUser from "./components/EditUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllUser />} />
          <Route path="/adduser" element={<CreateUser />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
