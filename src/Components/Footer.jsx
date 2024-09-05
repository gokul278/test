import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='Footer' style={{ "backgroundColor": "#fabc3f" }}>
            <div className='container-fluid'>
                <div className='row pt-5 pb-5'>
                    <div className='col-12 col-lg-4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4 className='mb-4' style={{ "color": "#3C3D37" }}>Logo</h4>
                                    <p style={{ "textAlign": "justify", "width": "100%" }}>
                                        XYZ Tech Solutions is a leading provider of innovative technology solutions for businesses worldwide. Our mission is to empower businesses with cutting-edge tools to achieve digital transformation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mt-5 mt-lg-0'>
                        <div className='container'>
                            <div className='row' style={{ "display": "flex", "justifyContent": "center" }}>
                                <div className='col-12 col-lg-6'>
                                    <h4 className='mb-4' style={{ "color": "#3C3D37" }}>Get in Touch</h4>
                                    <p style={{ "textAlign": "justify", "width": "100%", "fontSize": "16px", "fontWeight": "500", "color": "#3C3D37" }}>
                                        <span><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;info@xyz.com</span><br />
                                    </p>
                                    <p style={{ "textAlign": "justify", "width": "100%", "fontSize": "16px", "fontWeight": "500", "color": "#3C3D37" }}>
                                        <span className='mt-2'><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 1023456789</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mt-5 mt-lg-0'>
                        <div className='container'>
                            <div className='row' style={{ "display": "flex", "justifyContent": "center" }}>
                                <div className='col-12 col-lg-6'>
                                    <h4 className='mb-4' style={{ "color": "#3C3D37" }}>Pages</h4>
                                    <p style={{ "textAlign": "justify", "width": "100%", "fontSize": "16px", "fontWeight": "500", "color": "#3C3D37" }}>
                                        <span className='mt-5' style={{ "cursor": "pointer" }} onClick={() => {
                                            navigate('/');
                                        }}><i class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Home</span><br />
                                        <span className='mt-5' style={{ "cursor": "pointer" }} onClick={() => {
                                            navigate('/services');
                                        }}><i class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Services</span><br />
                                        <span className='mt-5' style={{ "cursor": "pointer" }} onClick={() => {
                                            navigate('/about');
                                        }}><i class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;About Us</span><br />
                                        <span className='mt-5' style={{ "cursor": "pointer" }} onClick={() => {
                                            navigate('/contact');
                                        }}><i class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Contact Us</span><br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}