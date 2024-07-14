import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Reviews() {
  const [selectedStarCount,setselectedStarCount] = useState(0)
  const [selectedHovercount, setselectedHovercount] = useState(0)

  const [show, setShow] = useState(false);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const [val,setVal] = useState('')
const [val1,setVal1] = useState('')
  const change = event=>{
    setVal(event.target.value)
  }
  const change2= event=>{
    setVal1(event.target.value)
  }
  

  const click=()=>{
    handleClose()
    toast.success('Posted successfully')
  }




  return (
    <>
   

   {/*{[...Array(2)].map((_,index1)=>{})} */}
 
    <div className='d-flex justify-content-between'>
        <div className='ms-3 d-flex'>
            {/*<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt=" no image"  width={'300px'}/>*/}
            <iframe width="300" height="200" src="https://www.youtube.com/embed/IssB4wkge4o?" title="എന്താണ് Artificial Intelligence | Explained in Malayalam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='ms-3 p-3'>
            <div className='star fs-2 '>
                {[...Array(5)].map((_,index)=>{
                  return <span key={index} 
                  className={`${index+1<=selectedStarCount?'selected':''} ${index+1<=selectedHovercount?'selected':''}`}
                  onMouseOver={()=>{
                    setselectedHovercount(index+1)
                  }}
                  onMouseOut={()=>{
                    setselectedHovercount(0)
                  }}
                  onClick={()=>{
                    setselectedStarCount(index+1)
                  }}
                
                  >&#9733;</span>   
                })}
            
            </div>
            Ratings : {selectedStarCount}/5
          <p className='text-secondary'>{val1} : {val} </p>
            
            
        </div>
        </div>
        <div className=''style={{marginLeft:'100px'}}>
            <button className='btn btn-info' onClick={handleShow}> Edit Feedback </button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post your comment Here !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={val1}
                onChange={change2}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={change} value={val}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={click}>
            Post comment
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
    














 
    <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Reviews