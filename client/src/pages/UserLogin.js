import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:2020/api/hr/login', {
        name, 
      });
      if(data.success===true && data.user.role==="1"){
        navigate(`/joining-admin`, { state: { user: data.user } })
      }
      else if(data.success===true){
        navigate(`/joining-user`, { state: { user: data.user } })
      }
      console.log(data);
    } catch (error) {
      alert(`${name} is not registerd`);
    }
  };

  return (
    <div className='text-center py-5 d-flex flex-column justify-content-center align-items-center' style={{height:'100vh', background:"#CFF5E7"}}>
      <div className='p-5' style={{ background:"#3F979B"}}>
      <h2 className=' fst-italic text-white pb-2'>Login</h2>
      <form  onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          className='py-2 px-4 text-center'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       <br/>
        <button className='w-100 my-3 py-2 btn btn-info rounded-0' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default UserLogin;
