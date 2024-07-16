import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Content({course}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
       
    <div className="card mb-3 mt-3 " >
  <div className="row g-0 ">
    <div className="col-md-6">
      <img src={course.image} alt="" className='w-100' height={'150px'} onClick={handleShow}/>
      
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">This is a wider card with supporting text below</p>
       
     
        
      </div>
    </div>
  </div>
</div>
<Modal size='xl' 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
         <iframe width="100%" height="500px" src={`${course.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Content