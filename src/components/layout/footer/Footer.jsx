import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faApple, faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
      <div className='footer-wrapper p-5 border-top'>
        <div className="row w-100">
          <div className="col-md-3  d-flex  flex-column align-items-center ">

            <h4 className='mb-3'>Knowlege On Tap</h4>
            <div >
              <Link className='text-decoration-none' to={'https://play.google.com/store/apps?hl=en-IN'}>
                <button className=' btn btn-outline-danger rounded-0 rounded-top w-100 d-flex border-bottom-danger py-1 align-items-center justify-content-center'>
                  <FontAwesomeIcon icon={faAndroid} size='xl' className='me-2 color_light' />
                  <h5 className='fontFifty color_light'>Get the Android App</h5>
                </button>
              </Link>

              <Link className='text-decoration-none'>
                <button className='btn btn-outline-danger rounded-bottom w-100 rounded-0 d-flex py-1 align-items-center justify-content-center'>
                  <FontAwesomeIcon icon={faApple} size='xl' className='me-2 color_light' />
                  <h6 className='fontFifty color_light'>Get the iOS App</h6>
                </button>
              </Link>
            </div>
          </div>  
          <div className="col-md-3 ">
            <div className='mx-5'>
              <h4 className='mb-3'>Links</h4>
              <Link><p>Home</p></Link>
              <p>About us</p>
              <p>Resourses</p>
              <p>Career</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className='mx-5'>
              <h4 className='mb-3'>Plans</h4>
              <p>For individuals</p>
              <p>For Students</p>
              <p>For teams</p>
              <p>Discounts</p>

            </div>
          </div>
          <div className="col-md-3 ">
            <h4 className='mb-3'>Follow Us!</h4>
            <div className='d-flex flex-nowrap'>
              <Link><div className='btnRound me-2'><FontAwesomeIcon icon={faYoutube} size='lg' className='text-secondary'/></div></Link>
              <Link><div className='btnRound  me-2'><FontAwesomeIcon icon={faFacebook} size='lg'className='text-secondary' /></div></Link>
              <Link><div className='btnRound  me-2'><FontAwesomeIcon icon={faInstagram} size='lg' className='text-secondary'/></div></Link>
              <Link><div className='btnRound  me-2'> <FontAwesomeIcon icon={faLinkedin} size='lg' className='text-secondary'/></div></Link>
              <Link><div className='btnRound  me-2'><FontAwesomeIcon icon={faGithub} size='lg'className='text-secondary' /></div></Link>
              <Link><div className='btnRound  me-2'><FontAwesomeIcon icon={faXTwitter} size='lg' className='text-secondary'/></div></Link>


            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Footer