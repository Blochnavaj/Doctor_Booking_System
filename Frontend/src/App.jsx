import React from 'react';
import Navbar from './Components/Navbar'; // Keep this import
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Doctor from './Pages/Doctor';
import Login from './Pages/Login';
import MyAppointments from './Pages/MyAppointments';
import MyProfile from './Pages/MyProfile';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Appointments from './Pages/Appointments';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
// import Footer from './Components/Footer'; // Keep this import

function App() {
  return (
    <>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/doctor/:speciality' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-appointment' element={<MyAppointments />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/appointments/:docId' element={<Appointments />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
