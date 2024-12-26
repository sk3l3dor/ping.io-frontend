// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login'; 
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import OtpPage from './pages/OtpPage'
import LandingPage from './pages/LandingPage'

function App() {
    return (
        <Provider store={store}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/otp" element={<OtpPage />} />
                </Routes>
        </Provider>
    );
}

export default App;