import { About } from '../About';
import { Login } from '../LoginPage';
import { Register } from '../RegisterPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path='/about' element={<About/>}/> 
        <Route exact  path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}