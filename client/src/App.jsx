import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import TypesPage from "./pages/TypesPage";
import BrandsPage from "./pages/BrandsPage";
import ProductPage from "./pages/ProductPage";
import TypePage from "./pages/TypePage";
import BrandPage from "./pages/BrandPage";
import SignUp from "./components/UI/signUp/SignUp";
import SignIn from "./components/UI/signIn/SignIn";
import ProductMainPage from "./pages/productMainPage/ProductMainPage";
import ProductsMainPage from "./pages/productsMainPage/ProductsMainPage";
import Page404 from "./pages/Page404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionRefresh } from "./store/actions/asyncActions/users";

const App = () => {
  const authUser = useSelector((state) => state.usersReducer);
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRefresh());
  }, []);

  if (authUser.isAuth) {
    if (authUser.user.role == "ADMIN") {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/info/:name" element={<ProductMainPage />} />
            <Route path="registration" element={<SignUp />} />
            <Route path="autorization" element={<SignIn />} />
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<AdminPage />} />
            <Route path="admin_products" element={<ProductsPage />} />
            <Route path="admin_users" element={<UsersPage />} />
            <Route path="admin_products" element={<ProductsPage />} />
            <Route path="admin_products/:id" element={<ProductPage />} />
            <Route path="admin_types/:id" element={<TypePage />} />
            <Route path="admin_brands" element={<BrandsPage />} />
            <Route path="admin_brands/:id" element={<BrandPage />} />
            <Route path="admin_types" element={<TypesPage />} />
          </Route>
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/info/:name" element={<ProductMainPage />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/autorization" element={<SignIn />} />
          </Route>
        </Routes>
      );
    }
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/info/:name" element={<ProductMainPage />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/autorization" element={<SignIn />} />
        </Route>
      </Routes>
    );
  }
};

export default App;
