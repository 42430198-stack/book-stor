import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Login from './pages/Login';
import Admin from './pages/Admin';
import booksData from './data/books';

function App() {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState('home');
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [books, setBooks] = useState(booksData);

    const filteredBooks = books.filter(book =>
        book.text.toLowerCase().includes(search.toLowerCase())
    );

    const handleLoginSuccess = (username, admin) => {
        setUser(username);
        setIsAdmin(admin);
        setCurrentPage('home');
    };

    const handleLogout = () => {
        setUser(null);
        setIsAdmin(false);
        setCurrentPage('home');
    };

    const handleLoginClick = () => {
        setCurrentPage('login');
    };

    const handleAddBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const handleDeleteBook = (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            setBooks(books.filter(book => book.id !== id));
        }
    };

    return (
        <>
            <Navbar 
                onPageChange={setCurrentPage}
                search={search}
                onSearchChange={setSearch}
                user={user}
                isAdmin={isAdmin}
                onLogout={handleLogout}
                onLoginClick={handleLoginClick}
            />

            <div style={{ paddingTop: '80px' }}>
                {currentPage === 'home' && (
                    <div className="container my-4">
                        <h1 className="mb-4">
                            Book Collection
                        </h1>

                        <p className="text-muted mb-3">
                            Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
                        </p>

                        <div className="row g-3">
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map(book => (
                                    <div key={book.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                        <Card
                                            image={book.image}
                                            text={book.text}
                                            link={book.link}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <p className="text-center text-muted">
                                        No books found matching "{search}"
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {currentPage === 'credits' && (
                    <div className="container my-4">
                        <h1>Credits</h1><br />
                        <h2 style={{ textAlign: "center" }}>This is saleh's project</h2>
                        <h2 style={{ textAlign: "center" }}>with the help of DR. fahed</h2>
                        <ul>
                            <li>this is a simple book collection app that allows users to browse and manage their book collection.</li>
                            <li>the app is built using react and bootstrap for styling.</li>
                            <li>users can search for books, add new books, and delete existing books.</li>
                            <li>the app also includes a login system with admin privileges for managing the book collection.</li>
                        </ul>
                       <br />
                        <h3 style={{ textAlign: "center" }}>Thank you for using our app!</h3>
                    </div>
                )}

                {currentPage === 'login' && (
                    <Login onLoginSuccess={handleLoginSuccess} />
                )}

                {currentPage === 'admin' && isAdmin && (
                    <Admin 
                        books={books}
                        onAddBook={handleAddBook}
                        onDeleteBook={handleDeleteBook}
                    />
                )}
            </div>
        </>
    );
}

export default App;