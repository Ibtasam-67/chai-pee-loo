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
import AdminLanding from "./componenets/adminLanding";
import AdminProtected from "./componenets/adminProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected Component={Landing} />} />
        <Route path="/signin" element={<Protected Component={SigninPage} />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/teamodal" element={<Protected Component={TeaModal} />} />
        <Route
          path="/lunchmodal"
          element={<Protected Component={LunchModal} />}
        />
        <Route
          path="/adminsignin"
          element={<AdminProtected Component={AdminSignIn} />}
        />
        <Route
          path="/adminlanding"
          element={<AdminProtected Component={AdminLanding} />}
        />
        <Route path="/order" element={<AdminProtected Component={Order} />} />
      </Routes>
    </div>
  );
}

export default App;
