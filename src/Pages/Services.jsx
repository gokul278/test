import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Services = () => {
  document.title = "Company - Services";
  return (
    <div>
      <Navbar />
      <div className='services-body'>
        <div className='container'>
          <div className='row'> <div className='col-12 mt-5' align="center">
            <h1 style={{ "color": "#3c3d37", "fontWeight": "700" }}>Company</h1>
            <h2 style={{ "color": "#fabc3f", "fontWeight": "500", "textDecoration": "underline" }}>A Leading Company</h2>
          </div>
            <div className='col-12 mt-5 mb-5' style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "20px" }}>
              <div class="card">
                <p class="card-title">Custom Software Development</p>
                <p class="small-desc" style={{ "textAlign": "justify" }}>
                  We design and develop bespoke software solutions tailored to meet the unique needs of your business. Our team specializes in creating high-quality, scalable applications that enhance your operational efficiency and drive growth.
                </p>
                <div class="go-corner">
                  <div class="go-arrow"><i class="fa-solid fa-star"></i></div>
                </div>
              </div>
              <div class="card">
                <p class="card-title">Custom Software Development</p>
                <p class="small-desc" style={{ "textAlign": "justify" }}>
                  We design and develop bespoke software solutions tailored to meet the unique needs of your business. Our team specializes in creating high-quality, scalable applications that enhance your operational efficiency and drive growth.
                </p>
                <div class="go-corner">
                  <div class="go-arrow"><i class="fa-solid fa-star"></i></div>
                </div>
              </div>
              <div class="card">
                <p class="card-title">Custom Software Development</p>
                <p class="small-desc" style={{ "textAlign": "justify" }}>
                  We design and develop bespoke software solutions tailored to meet the unique needs of your business. Our team specializes in creating high-quality, scalable applications that enhance your operational efficiency and drive growth.
                </p>
                <div class="go-corner">
                  <div class="go-arrow"><i class="fa-solid fa-star"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
