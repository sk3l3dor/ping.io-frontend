import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="user-icon">
          <span className="material-icons">person</span>
        </div>
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Submit</button>
          <p className="forgot-password">Forget your password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
