// src/pages/PhoneNumberInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneNumberInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the phone number to your API to send an OTP
        console.log('Phone number submitted:', phoneNumber);
        navigate('/otp'); // Navigate to OTP input page
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h3>Enter your phone number</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    style={{ padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
                    required
                />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Send OTP
                </button>
            </form>
        </div>
    );
};

export default PhoneNumberInput;