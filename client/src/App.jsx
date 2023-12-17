import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import NotFound from "./helpers/NotFound";
import {SellerRoutes} from "./routes/RoutesConfig";
import {BrowserRouter as Router, Routes , Route , Outlet} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
          <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path="/seller/login" element={<Login/>}/>
                    <Route path="/seller/signup" element={<Signup/>}/>
                    <Route element={<SellerRoutes/>}>
                        <Route path="/seller/dashboard" element={<Dashboard/>}/>
                    </Route>
                    
                    
                         
          </Routes>
      </Router>
    </>
  )
}

export default App