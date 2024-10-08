import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Appbar from './components/Appbar';
import AdminSignInPage from './components/AdminSignInPage';
import StudentSignInPage from './components/StudentSignInPage';
import PlacementCellSignInPage from './components/PlacementCellSignInPage';
import StudentSignUpPage from './components/StudentSignUpPage';
import PlacementCellSignUpPage from './components/PlacementCellSignUpPage';

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />

        {/* General Sign In and Sign Up Routes */}
        <Route path="/signin" element={<SignIn title="Sign In" role="general" />} />
        <Route path="/signup" element={<SignUp title="Sign Up" role="general" />} />

        {/* Specific Sign In Pages */}
        <Route path="/adminlogin/signin" element={<AdminSignInPage />} />
        <Route path="/studentlogin/signin" element={<StudentSignInPage />} />
        <Route path="/placementcelllogin/signin" element={<PlacementCellSignInPage />} />

        {/* Specific Sign Up Pages */}
        <Route path="/studentregister/signup" element={<StudentSignUpPage />} />
        <Route path="/placementcellregister/signup" element={<PlacementCellSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
