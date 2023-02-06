import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account, Login, Home, Signup, SharedLayout, Tour } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} className="login" />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="tour/:tourId" element={<Tour />} />
          {/* singel tour route need to be implemented */}
        </Route>
      </Routes>
      <ToastContainer style={{ fontSize: "20px" }} />
    </BrowserRouter>
  );
}

export default App;
