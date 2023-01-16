import './App.css';
import { Routes, Route } from 'react-router-dom' 
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import TypesPage from './pages/TypesPage';
import BrandsPage from './pages/BrandsPage';
import ProductPage from './pages/ProductPage';
import TypePage from './pages/TypePage';
import BrandPage from './pages/BrandPage';
import Page404 from './pages/Page404';
import SignUp from './components/UI/signUp/SignUp'
import SignIn from './components/UI/signIn/SignIn';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { actionRefresh } from './store/actions/asyncActions/users';

const App = () => {
  const authUser = useSelector(state => state.usersReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRefresh());
  }, [])
  
  if (authUser.isAuth) {
    if (authUser.user.role == "ADMIN") {
      return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path='/products/:id' element={<ProductPage/>}/>
            <Route path='/types/:id' element={<TypePage/>}/>
            <Route path="/brands" element={<BrandsPage/>}/>
            <Route path="/brands/:id" element={<BrandPage/>} />
            <Route path="/types" element={<TypesPage/>}/>
            <Route path="/registration" element={<SignUp/>} />
            <Route path="/autorization" element={<SignIn/>} />
            <Route path="/404" element={<Page404/>} />
          </Route>
        </Routes>
      )
    } else {
      return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/registration" element={<SignUp/>} />
            <Route path="/autorization" element={<SignIn/>} />
          </Route> 
        </Routes>
      )
    }
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/registration" element={<SignUp/>} />
          <Route path="/autorization" element={<SignIn/>} />
        </Route> 
      </Routes>
    )
  }
}

export default App;
