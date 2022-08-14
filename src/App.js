import "./App.css";
import SigninPage from "./componenets/signinPage";
import SignupPage from "./componenets/signupPage/index";
import { Routes, Route } from "react-router-dom";
import Landing from "./componenets/landing";
import TeaModal from "./componenets/teaModal/index";
import LunchModal from "./componenets/lunchModal/index";
import AdminSignIn from "./componenets/adminSignIn";
import Protected from "./componenets/protectedRoutes";
import AdminLanding from "./componenets/adminLanding";
import AdminProtected from "./componenets/adminProtectedRoutes";
import TeaOrder from "./componenets/orders/teaOrder";
import LunchOrder from "./componenets/orders/lunchOrder";
import EveningTeaModal from "./componenets/eveningTeaModal/index";
import EveneingTeaOrder from "./componenets/orders/eveningTeaOrder";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Protected Component={Landing} />} />
        <Route path="/signin" element={<Protected Component={SigninPage} />} />
        <Route path="/lunchmodal" element={<Protected Component={LunchModal} />} />
        <Route path="/teamodal" element={<Protected Component={TeaModal} />} />
        <Route path="/eveningTea" element={<Protected Component={EveningTeaModal} />} />
        <Route path="/adminsignin" element={<AdminProtected Component={AdminSignIn} />} />
        <Route path="/adminlanding" element={<AdminProtected Component={AdminLanding} />} />
        <Route path="/teaorder" element={<AdminProtected Component={TeaOrder} />} />
        <Route path="/lunchorder" element={<AdminProtected Component={LunchOrder} />} />
        <Route path="/eveningteaorder" element={<AdminProtected Component={EveneingTeaOrder} />} />
      </Routes>
    </div>
  );
}

export default App;
