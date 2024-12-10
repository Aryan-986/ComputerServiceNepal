import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import OtpVerification from '../pages/otpVerification';
import ResetPassword from '../pages/ResetPassword';
import UserMenuMobile from '../pages/UserMenuMobile';
import RepairPage from "../pages/RepairPage"
import TestomonialPage from '../pages/TestomonialPage';
import AboutPage from '../pages/AboutPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "search",
        element : <SearchPage/>
      },
      {
        path : "repair",
        element: <RepairPage/>
      },
    
      {
        path : "about-us",
        element: <AboutPage/>
      },
      {
        path : "testomonial",
        element : <TestomonialPage/>
      },
      {
        path : 'login',
        element : <Login/>
      },
      {
        path : 'register',
        element : <Register/>
      },
      {
        path : "forgot-password",
        element : <ForgotPassword/>
      },
      {
        path : "verification-otp",
        element : <OtpVerification/>
      },
        {
          path : "reset-password",
          element : <ResetPassword/>
        },
        {
          path: "user",
          element : <UserMenuMobile/>
        }
        
        ],
  },
]);

export default router;
