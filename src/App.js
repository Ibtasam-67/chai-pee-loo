import "./App.css";
import SigninPage from "./componenets/signinPage";
import SignupPage from "./componenets/signupPage/index";
import { Routes, Route } from "react-router-dom";
import Landing from "./componenets/landing";
import TeaModal from "./componenets/teaModal/index";
import LunchModal from "./componenets/lunchModal/index";
import Order from "./componenets/orders/order/index";
import AdminSignIn from "./componenets/adminSignIn";
import Protected from "./componenets/protectedRoutes";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Protected Component={SigninPage} />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/teamodal" element={<TeaModal />} />
        <Route path="/lunchmodal" element={<LunchModal/>} />
        <Route path="/order" element={<Order/>} />
        
      </Routes>
    </div>
  );
}

export default App;
