import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import Aboutusbg from '../Utils/aboutusbg.png';

export const About = () => {
    document.title = "Company - About Us";
    return (
        <div>
            <Navbar />
            <div className='about-body'>
                <div className='container mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-6' style={{ "display": "flex", "justifyContent": "center" }}>
                            <img src={Aboutusbg} style={{ "borderRadius": "10px" }} alt='img' />
                        </div>
                        <div className='col-12 col-lg-6 mt-5'>
                            <h1 style={{ "color": "#3c3d37", "fontWeight": "700" }}>Company</h1>
                            <h2 style={{ "color": "#fabc3f", "fontWeight": "500", "textDecoration": "underline" }}>A Leading Company</h2>
                            <p className='mt-3' style={{ "textAlign": "justify", "fontSize": "16px", "fontWeight": "500", "color": "#3c3d37" }}>XYZ Tech Solutions is a premier provider of cutting-edge technology solutions dedicated to empowering businesses around the globe. Founded in 2010, our company has been at the forefront of the digital revolution, offering a comprehensive suite of services designed to drive innovation and efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /></div>
    )
}
