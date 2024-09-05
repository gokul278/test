import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ "backgroundColor": "#FABC3F" }}>
                <div className="container-fluid">
                    <div className="navbar-brand" style={{ "cursor": "pointer", "fontSize": "25px", "fontWeight": "bold" }}>Logo</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={() => {
                                navigate('/');
                            }}>
                                <div className="nav-link" aria-current="page" style={{ "cursor": "pointer" }}>Home</div>
                            </li>
                            <li className="nav-item" onClick={() => {
                                navigate('/services');
                            }}>
                                <div className="nav-link" aria-current="page" style={{ "cursor": "pointer" }}>Services</div>
                            </li>
                            <li className="nav-item" onClick={() => {
                                navigate('/about');
                            }}>
                                <div className="nav-link" aria-current="page" style={{ "cursor": "pointer" }}>About Us</div>
                            </li>
                            <li className="nav-item" onClick={() => {
                                navigate('/contact');
                            }}>
                                <div className="nav-link" aria-current="page" style={{ "cursor": "pointer" }}>Contact Us</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
