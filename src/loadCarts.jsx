import React from 'react';
import './cart.css';
import Cart from './card';

export default function loadCarts() {
    
    return (
        <div className="container mt-4">
            <div className="card h-100">
                <img src={this.image} className="card-img-top" alt="card image" />
                <div className="card-body">
                    <p className="card-text">{this.text}</p>
                    <a href={this.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
            </div>
            `;
        </div>
    );
}
