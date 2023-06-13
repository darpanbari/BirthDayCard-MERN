import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalTabs from './components/Nav';
import JoiningUser from './pages/JoiningUser';
import UserLogin from './pages/UserLogin';
import JoiningAdmin from './pages/joiningAdmin';
import SideNav from './components/SideNav';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/dashboard" element={<VerticalTabs/>}/>
        <Route path="/" element={<UserLogin/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path='/joining-user' element={<JoiningUser/>}/>
        <Route path='/joining-admin' element={<JoiningAdmin/>}/>
        <Route path='/side-nav' element={<SideNav/>}/>

      </Routes>
    </div>
  );
}

export default App;
