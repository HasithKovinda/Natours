import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Account,
  Login,
  Home,
  Signup,
  SharedLayout,
  Tour,
  ProtectedRoute,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((store) => store.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} className="login" />
          <Route path="signup" element={<Signup />} />
          <Route
            path="account"
            element={
              <ProtectedRoute user={user}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="tour/:tourId" element={<Tour />} />
        </Route>
      </Routes>
      <ToastContainer style={{ fontSize: "20px" }} />
    </BrowserRouter>
  );
}

export default App;
