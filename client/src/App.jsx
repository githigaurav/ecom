import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import NotFound from "./helpers/NotFound";
import Home from './home/Home'
import {SellerRoutes} from "./routes/RoutesConfig";
import {BrowserRouter as Router, Routes , Route , Outlet} from 'react-router-dom'
import Parent from './nestedRoutes/Parent';
import Child from './nestedRoutes/Child';

function App() {
  return (
    <>
      <Router>
          <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/seller/login" element={<Login/>}/>
                    <Route path="/seller/signup" element={<Signup/>}/>
                    <Route element={<SellerRoutes/>}>
                        <Route path="/seller/dashboard" element={<Dashboard/>}/>
                    </Route>
                    <Route path="/" element={<Parent/>}>
                        <Route path="post/new" element={<Child/>}/>
                    </Route>
                    
                         
          </Routes>
      </Router>
    </>
  )
}

export default App