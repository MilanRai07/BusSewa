import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from './pages/Home/HomeIndex'
import Layout from './Layout'
import AboutUsIndex from './pages/about/AboutUsIndex';
import OffersIndex from './pages/offers/OffersIndex';
import BlogsIndex from './pages/blogs/BlogsIndex';
import ContactIndex from './pages/contact/ContactIndex';
import BookingIndex from './pages/bookings/BookingIndex';
import ProfileIndex from './pages/profile/ProfileIndex';
import LoginForm from './components/form/userForms/LoginForm';
import SignupForm from './components/form/userForms/SignupForm';
import ForgetPassword from './components/form/userForms/ForgetPassword';
import Verification from './components/form/userForms/Verification';
import ResetPassword from './components/form/userForms/ResetPassword';
import MaitriBookingIndex from './pages/Home/maitriBooking/MaitriBookingIndex';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="about-us" element={<AboutUsIndex />} />
          <Route path="offers" element={<OffersIndex />} />
          <Route path='blogs' element={<BlogsIndex />} />
          <Route path="contact-us" element={<ContactIndex />} />
          <Route path="bookings" element={<BookingIndex />} />
          <Route path="profile" element={<ProfileIndex />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="sign-up" element={<SignupForm />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="verification" element={<Verification />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="maitri-booking" element={<MaitriBookingIndex/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
