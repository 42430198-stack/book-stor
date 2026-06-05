import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin({ books, onAddBook, onDeleteBook }) {
    const [formData, setFormData] = useState({
        image: '',
        text: '',
        link: ''
    });
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.image || !formData.text || !formData.link) {
            alert('Please fill in all fields');
            return;
        }

        const newBook = {
            id: Math.max(...books.map(b => b.id), 0) + 1,
            image: formData.image,
            text: formData.text,
            link: formData.link
        };

        onAddBook(newBook);
        setFormData({ image: '', text: '', link: '' });
        setSuccess('Book added successfully!');
        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="container my-4">
                <h1 className="mb-4">📊 Admin Dashboard</h1>

                <div className="row">
                    {/* Add Book Form */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Add New Book</h3>

                                {success && (
                                    <div className="alert alert-success">{success}</div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">
                                            Image Path
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="image"
                                            name="image"
                                            placeholder="/images/book.jpg"
                                            value={formData.image}
                                            onChange={handleChange}
                                        />
                                        <small className="text-muted">e.g., /images/my_book.jpg</small>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="text" className="form-label">
                                            Book Title & Author
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="text"
                                            name="text"
                                            placeholder="Book Title by Author Name"
                                            value={formData.text}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="link" className="form-label">
                                            Wikipedia/Link
                                        </label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="link"
                                            name="link"
                                            placeholder="https://en.wikipedia.org/wiki/..."
                                            value={formData.link}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-success w-100"
                                    >
                                        ➕ Add Book
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Books List */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title mb-4">
                                    Books in Database ({books.length})
                                </h3>

                                <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                    {books.length > 0 ? (
                                        <div className="list-group">
                                            {books.map(book => (
                                                <div 
                                                    key={book.id}
                                                    className="list-group-item"
                                                >
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <div>
                                                            <h6 className="mb-1">{book.text}</h6>
                                                            <small className="text-muted">
                                                                ID: {book.id}
                                                            </small>
                                                        </div>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => onDeleteBook(book.id)}
                                                        >
                                                            ✕
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-muted text-center">No books yet</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;