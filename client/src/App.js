import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollConfig from "./config/scrollConfig";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Dashboard/Admin_Dashboard";
import Users from "./pages/Admin/Admin_Users/Admin_Users";
import Products from "./pages/Admin/Admin_Products/Admin_Products";
import Orders from "./pages/Admin/Admin_Orders/Admin_Orders";
import Login from "./pages/Login/Login";
import Comparison from "./pages/Comparison/Comparison";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Estimation from "./pages/Estimation/Estimation";
import UserProfile from "./pages/User/UserProfile";
import store from "./store/reducers/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ScrollConfig />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-profile/:id" element={<UserProfile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/estimation/:id" element={<Estimation />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
