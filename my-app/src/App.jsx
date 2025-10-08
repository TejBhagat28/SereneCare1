import {BrowserRouter, Routes,Route} from "react-router-dom"

import FirstPage from "./Components/FirstPage";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import MainPage from "./Components/MainPage";
import AdminPage from "./Components/AdminPage";
import Doctors from "./Components/Doctors";
import DoctorCard from "./Components/DoctorCard";
import AppointmentPage from "./Components/AppointmentPage";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import ViewSchedulePage from "./Components/ViewSchedulePage";
// import OurDoctors from "./Components/OurDoctors";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor-card" element={<DoctorCard />} />
        {/* <Route path="/our-doctors" element={<OurDoctors />} /> */}
        <Route path="/appointment/:id" element={<AppointmentPage />} />
        <Route path="/view-schedule" element={<ViewSchedulePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
