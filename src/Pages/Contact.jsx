import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Contact = () => {
  document.title = "Company - Contact Us";
  return (
    <div>
      <Navbar />
      <div className='services-body'>
        <div className='container mt-5 mb-5'>
          <div className='row'> <div className='col-12 mt-5' align="center">
            <h1 style={{ "color": "#3c3d37", "fontWeight": "700" }}>Company</h1>
            <h2 style={{ "color": "#fabc3f", "fontWeight": "500", "textDecoration": "underline" }}>A Leading Company</h2>
          </div>
          </div>
          <div className='row mt-5' style={{ "display": "flex", "justifyContent": "center" }}>
            <div className='col-12 col-lg-12' style={{ "backgroundColor": "#3c3d37", "borderRadius": "10px" }}>
              <div className='row mt-5 mb-5'>
              <div className='col-12 col-lg-6' align="center">
                <i class="fa-solid fa-envelope" style={{ "color": "#fff", "fontSize": "50px" }}></i>
                <br/>
                <br/>
                <a href='mailto:info@xyz.com' style={{"textDecoration":"none","color":"#fff","cursor":"pointer", "paddingTop":"20px","fontSize":"25px","fontWeight":"700"}}>info@xyz.com</a>
              </div>
              <div className='col-12 col-lg-6' align="center">
                <i class="fa-solid fa-phone" style={{ "color": "#fff", "fontSize": "50px" }}></i>
                <br/>
                <br/>
                <a href='tel:+911023456789' style={{"textDecoration":"none","color":"#fff","cursor":"pointer", "paddingTop":"20px","fontSize":"25px","fontWeight":"700"}}>+911023456789</a>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
      <Footer /></div>
  )
}
