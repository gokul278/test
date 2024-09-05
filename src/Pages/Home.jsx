import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Home = () => {
  document.title = "Company - Home";
  return (
    <div className='Home'>
      <Navbar />
      <div className='home-body' style={{ "backgroundColor": "white" }}>
        <div className='container-fluid mt-5 mb-5'>
          <div className='row'>
            <div className='col-12' align="center">
              <h1 style={{ "color": "#3c3d37", "fontWeight": "700" }}>Company</h1>
            </div>
          </div>
          <div className='row mt-3' style={{ "display": "flex", "justifyContent": "center" }}>
            <div className='col-6' align="center">
              <h2 style={{ "color": "#fabc3f", "fontWeight": "500", "textDecoration": "underline" }}>A Leading Company</h2>
            </div>
          </div>
          <div className='row mt-5 mb-5' style={{ "display": "flex", "justifyContent": "center" }}>
            <div className='col-12 col-lg-6' align="center">
              <p>XYZ Tech Solutions is a premier provider of cutting-edge technology solutions dedicated to empowering businesses around the globe. Founded in 2010, our company has been at the forefront of the digital revolution, offering a comprehensive suite of services designed to drive innovation and efficiency.</p>
            </div>
          </div>
          <div className='row mt-5 mb-5' style={{ "display": "flex", "justifyContent": "center" }}>
            <div className='col-12 col-lg-8' align="start">
              <p style={{ "textAlign": "justify" }}>Our core mission is to help organizations leverage the latest technological advancements to transform their operations and achieve their strategic goals. We specialize in custom software development, cloud computing, and IT consulting. Our team of skilled professionals combines deep industry knowledge with technical expertise to deliver tailored solutions that meet the unique needs of each client.
                <br /><br />
                At XYZ Tech Solutions, we believe that technology should be an enabler, not a barrier. We work closely with our clients to understand their challenges and goals, providing solutions that are both practical and forward-thinking. From developing scalable web applications to implementing robust cybersecurity measures, we are committed to delivering high-quality results that drive growth and improve performance.
                <br /><br />
                Our client-centric approach is reflected in our track record of successful projects and long-term partnerships. We take pride in our ability to adapt to evolving technologies and industry trends, ensuring that our clients stay ahead in a competitive market.We are not just a service provider; we are a partner in your digital journey. Whether you're looking to enhance your IT infrastructure, develop a new application, or explore new technologies, XYZ Tech Solutions is here to support you every step of the way.For more information about our services or to discuss how we can help your business, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
