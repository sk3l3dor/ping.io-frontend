// src/pages/OtpInput.js
import React, { useState } from 'react';

const OtpInput = () => {
    const [otp, setOtp] = useState(Array(6).fill('')); // Assuming a 6-digit OTP

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (value.match(/^\d$/)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
        if (value === '' && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP submitted:', otp.join(''));
        // Here you would typically verify the OTP with your API
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h3>Enter the OTP sent to your phone</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        style={{ width: '40px', height: '40px', margin: '0 5px', textAlign: 'center', fontSize: '18px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                ))}
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default OtpInput;