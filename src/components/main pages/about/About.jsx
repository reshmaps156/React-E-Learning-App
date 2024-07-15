import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { yellow } from '@mui/material/colors';


function About() {
  return (
    <div>
        <div >
            <img className='img1'  src="https://wallpaperaccess.com/full/6367121.jpg" alt="" />
        </div>
        <div className="row " style={{backgroundColor:'rgb(212, 211, 211)'}}>
            <div className="col-md-6 justify-content-center align-items-center d-flex">
                <img className='w-50' src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="" />
            </div>
            <div className="col-md-6 justify-content-center align-items-center mt-5 mb-5 p-5">
                <h1 style={{fontWeight:'bolder', fontSize:'60px', color:'blue'}}>Message From The Managing Trustee</h1>
                <h1 className='mt-4' style={{fontWeight:'bolder', fontSize:'60px'}}><FontAwesomeIcon icon={faQuoteLeft} style={{color:'purple'}}/></h1>
                <h5 className='mt-3 ms-2 me-4' style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse delectus reprehenderit debitis nemo hic aliquid qui ducimus impedit, doloremque, totam temporibus quidem beatae dolore aperiam magni, nisi officia recusandae?</h5>
                <h1 className='mt-5'  style={{fontWeight:'bolder', fontSize:'50px', color:''}}>Valayar Paramasivan</h1>
                <h5 className='mt-3 ms-2 ' style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse delectus</h5>

            </div>
        </div>

        <div className='mt-5 mb-5'>
            <h1 className='text-center' style={{fontWeight:'bold', color:'blue'}}>ABOUT E-LEARNING</h1>

            <div className='row d-flex ms-5 justify-content-center align-items-center mt-5'>
                <div className="col-md-4 sm-12 mb-4">
                <Card style={{ width: '22rem' }} className='p-5 shadow'>
      <Card.Img variant="top" src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/mission-01.svg" className='w-100'/>
      <Card.Body>
        <Card.Title className='text-info text-center mt-3' style={{fontWeight:'bold'}}>MISSION</Card.Title>
        <Card.Text className='text-dark mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick ex
        </Card.Text>
      </Card.Body>
    </Card>
                </div>

                <div className="col-md-4 sm-12 mb-4">
                <Card style={{ width: '22rem' }} className='p-5 shadow'>
      <Card.Img variant="top" src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/vision-01.svg" className='w-100'/>
      <Card.Body>
        <Card.Title className='text-info text-center mt-3' style={{fontWeight:'bold'}}>VISION</Card.Title>
        <Card.Text className='text-dark mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick ex
        </Card.Text>
      </Card.Body>
    </Card>
                </div>

                <div className="col-md-4 sm-12 mb-4">
                <Card style={{ width: '22rem' }} className='p-5 shadow'>
      <Card.Img variant="top" src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/core-values-01.svg" className='w-100'/>
      <Card.Body>
        <Card.Title className='text-info text-center mt-3' style={{fontWeight:'bold'}}>CORE VALUES</Card.Title>
        <Card.Text className='text-dark mt-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick ex
        </Card.Text>
      </Card.Body>
    </Card>
                </div>
            
            </div>
        </div>

        <div className='pt-5 pb-5' style={{backgroundColor:'yellow'}}>
            <h1 className='text-center' style={{fontWeight:'bold', color:'blue'}}>WHY  E-LEARNING</h1>

            <div className="row ps-5 ms-3">
                <div className="col-md-6 justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                        <div className='justify-content-center align-items-center mt-5'>
                            <img className='me-5 rounded shadow' src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/inspiria-objective-compressed.webp" alt="" width={'70%'}/>
                            <h2 className='border p-3 text-center mt-5' style={{width:'70%', backgroundColor:'blue', color:'yellow', fontWeight:'bold'}}>OBJECTIVE</h2>
                            <p className='mt-4' style={{width:'70%', color:'black'}}>l Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla nam saepe quos suscipit sapiente adipisci ratione laudantium neque temporibus reiciendis magnam sed, reprehenderit voluptatibus obcaecati possimus quaerat beatae exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero, quae, culpa illum est alias iste voluptatibus repellat exercitationem recusandae inventore ipsam eum? Officia illo veniam rerum dolor, ea consequatur!</p>
                        </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                
                </div>
                <div className="col-md-6">
                <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                        <div className='justify-content-center align-items-center mt-5'>
                            <img className='me-5 rounded shadow' src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/learn-by-doing-compressed.webp" alt="" width={'70%'}/>
                            <h2 className='border p-3 text-center mt-5' style={{width:'70%', backgroundColor:'blue', color:'yellow', fontWeight:'bold'}}>LEARNING BY DOING</h2>
                            <p className='mt-4' style={{width:'70%', color:'black'}}>l Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla nam saepe quos suscipit sapiente adipisci ratione laudantium neque temporibus reiciendis magnam sed, reprehenderit voluptatibus obcaecati possimus quaerat beatae exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero, quae, culpa illum est alias iste voluptatibus repellat exercitationem recusandae inventore ipsam eum? Officia illo veniam rerum dolor, ea consequatur!</p>

                        </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>

            
        </div>

        <div className='d-flex justify-content-evenly align-items-center partnerIcons mb-5'>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-01.svg" alt=""  width={'100%'}/>
                <h5 className='mt-3' style={{fontWeight:'bold'}}>Industry Revelance</h5>
            </div>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-02.svg" alt="" width={'100%'} />
                <h5 className='mt-3' style={{fontWeight:'bold'}}>New technology trends</h5>
            </div>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-05.svg" alt="" width={'80%'} height={'50%'} />
                <h5 className='mt-3' style={{fontWeight:'bold'}}>Well-rounded personality development</h5>
            </div>
            
        </div>
        <div className='d-flex justify-content-evenly align-items-center partnerIcons mb-5'>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-03.svg" alt="" width={'100%'}/>
                <h5 className='mt-3' style={{fontWeight:'bold'}}>Hands-on practical training</h5>
            </div>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-04.svg" alt=""  width={'100%'}/>
                <h5 className='mt-3' style={{fontWeight:'bold'}}>Developing “Employability Skills”</h5>
            </div>
            <div>
                <img src="https://cdn-doepi.nitrocdn.com/YPAAdlhXVcMYSowlrIDCnIcTJwyBUGka/assets/images/optimized/rev-d514383/inspiria.edu.in/wp-content/uploads/About-us-UI-06.svg" alt=""  width={'100%'}/>
                <h5 className='mt-3' style={{fontWeight:'bold'}}>State-of-the-art infrastructure</h5>
            </div>
            
        </div>

    </div>
  )
}

export default About