import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import UserLogin from './auth/user/Login'
import UserSignup from './auth/user/Signup'
import NotFound from "./helpers/NotFound";
import Home from './home/Layout'
import Navbar from './home/Navbar'
import {SellerRoutes} from "./routes/RoutesConfig";
import {BrowserRouter as Router, Routes , Route , Outlet} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <Router>
          <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/seller/login" element={<Login/>}/>
                    <Route path="/seller/signup" element={<Signup/>}/>
                    <Route path="/user/login" element={<UserLogin/>}/>
                    <Route path="/user/signup" element={<UserSignup/>}/>
                    <Route element={<SellerRoutes/>}>
                        <Route path="/seller/dashboard" element={<Dashboard/>}/>
                    </Route>                  
                    
                         
          </Routes>
      </Router>
    </>
  )
}

export default App