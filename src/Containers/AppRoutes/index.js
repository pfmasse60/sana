import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../About';
import { Login } from '../LoginPage';
import { Register } from '../RegisterPage';


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register'>
          <Register/>
        </Route>
        <Route path='/About'>
          <About/>
        </Route>
      </Routes>
    </Router>
  )
}