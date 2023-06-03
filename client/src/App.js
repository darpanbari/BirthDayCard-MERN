import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalTabs from './components/Nav';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AdminDashboard/>}/> */}
        <Route path="/" element={<VerticalTabs/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
