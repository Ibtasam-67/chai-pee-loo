import "./App.css";
import SigninPage from "./componenets/signinPage";
import SignupPage from "./componenets/signupPage/index";
import { Routes, Route } from "react-router-dom";
import Landing from "./componenets/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
