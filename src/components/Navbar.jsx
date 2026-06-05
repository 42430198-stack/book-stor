function Navbar({ onPageChange, search, onSearchChange, user, isAdmin, onLogout, onLoginClick }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand">Saleh</a>

                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbar1"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange('home');
                                }}
                            >
                                Home
                            </a>
                        </li>

                        {isAdmin && (
                            <li className="nav-item">
                                <a 
                                    className="nav-link bg-warning text-dark rounded" 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onPageChange('admin');
                                    }}
                                    style={{ margin: '0 5px' }}
                                >
                                    📊 Admin Dashboard
                                </a>
                            </li>
                        )}

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange('credits');
                                }}
                            >
                                Credits
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                Contact Us
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <a 
                                        className="dropdown-item"
                                        href="https://www.instagram.com/1saleh.moussa?igsh=MXMwd3NsMXoxNmRqOA=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Insta
                                        <img src="/images/insta.PNG" width="10" height="10" alt="Instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="dropdown-item"
                                        href="https://www.facebook.com/share/1B4MzG3nNE/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Face
                                        <img src="/images/face.PNG" width="10" height="10" alt="Facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="dropdown-item"
                                        href="https://x.com/Saleh19834454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        X
                                        <img src="/images/x.PNG" width="10" height="10" alt="X" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="dropdown-item"
                                        href="mailto:42430198@students.liu.edu.lb"
                                    >
                                        Email
                                        <img src="/images/mail.webp" width="15" height="15" alt="Email" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center ms-auto gap-2">
                        {user ? (
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-white">
                                    {isAdmin ? '🔐 Admin: ' : '👤 '}{user}
                                </span>
                                <button 
                                    className="btn btn-outline-light btn-sm"
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button 
                                className="btn btn-outline-light btn-sm"
                                onClick={onLoginClick}
                            >
                                Login
                            </button>
                        )}

                        <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2"
                                type="search"
                                placeholder="🔍 Search..."
                                value={search}
                                onChange={(e) => onSearchChange(e.target.value)}
                                style={{ width: '200px' }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;