import "./App.css";
import SigninPage from "./componenets/signinPage";
import SignupPage from "./componenets/signupPage/index";
import { Routes, Route } from "react-router-dom";
import Landing from "./componenets/landing";
import TeaModal from "./componenets/teaModal/index";
import LunchModal from "./componenets/lunchModal/index";
import AdminSignIn from "./componenets/adminSignIn";
// import Protected from "./componenets/protectedRoutes";
import AdminLanding from "./componenets/adminLanding";
// import AdminProtected from "./componenets/adminProtectedRoutes";
import TeaOrder from "./componenets/orders/teaOrder";
import LunchOrder from "./componenets/orders/lunchOrder";
import EveningTeaModal from "./componenets/eveningTeaModal/index";
import EveneingTeaOrder from "./componenets/orders/eveningTeaOrder";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/lunchmodal" element={<LunchModal />} />
        <Route path="/teamodal" element={<TeaModal />} />
        <Route path="/eveningTea" element={<EveningTeaModal />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
        <Route path="/teaorder" element={<TeaOrder />} />
        <Route path="/lunchorder" element={<LunchOrder />} />
        <Route path="/eveningteaorder" element={<EveneingTeaOrder />} />
      </Routes>
    </div>
  );
}

export default App;
