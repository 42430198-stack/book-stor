import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Check if admin
        const isAdmin = email.toLowerCase() === 'admin@admin.com' && password === 'admin123';
        const username = email.split('@')[0];

        onLoginSuccess(username, isAdmin);
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <h2 className="card-title text-center mb-4">Login</h2>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-primary w-100 mb-3"
                                    >
                                        Login
                                    </button>
                                </form>

                                <div className="alert alert-info">
                                    <strong>User Login:</strong> Any email & password (6+ chars)<br/>
                                    <strong>Admin Login:</strong> admin@admin.com / admin123
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;