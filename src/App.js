// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login'; 
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import OTPPage from './pages/OtpPage'
import LandingPage from './pages/LandingPage'
import SignIn from '../src/components/SignIn';
import SignUp from '../src/sign-up/SignUp';
import DashBoard from './components/DashBoard';

function App() {
    return (
        <Provider store={store}>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/otp" element={<OTPPage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
        </Provider>
    );
}

export default App;