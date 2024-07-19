import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCourseApi } from '../../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';


function Adminpanel() {
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState({
    title: "",
    image: "",
    url: ""
  })
  
  // console.log(course);
  const validateLink= (e)=>{
    // console.log(e.target.value);
    const link = e.target.value
    if (link.startsWith('https://youtu.be')) {
      const yTkey = link.slice(17, 28)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setCourse({...course,url:embedLink})

    } else if (link.startsWith('https://www.youtube.com/watch?v=')) {
      const yTkey = link.slice(-11)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
       setCourse({...course,url:embedLink})
    }
    else {
      const yTkey = link.slice(-11)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
       setCourse({...course,url:embedLink})

  
  }
  
  

  }
  const addCourse = async(e)=>{
    e.preventDefault()
    const {title,image,url} = course
    if(!title || !image || !url){
      alert('Please fill the form completely')
    }else{
      const response = await addCourseApi(course)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        alert('Course added')
        handleClose()
      }else{
        alert('somehting went wrong')
      }
    }

  }
  

  const handleClose = () => {
    setShow(false);
    setCourse({
    title: "",
    image: "",
    url: ""
  })}
  const handleShow = () =>  setShow(true);
  
  return (
    <div>
        <button onClick={handleShow} className='btn btn-success w-100'><FontAwesomeIcon icon={faShieldHalved} className='me-2'/>Admin</button>
        <Modal show={show} onHide={handleClose} className='border text-light' style={{border:'1px solid black'}}>
        <Modal.Header closeButton>
          <Modal.Title>Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control mt-3' placeholder='Course Title' onChange={(e)=>{setCourse({...course,title:e.target.value})}}/>
          <input type="text" className='form-control mt-3' placeholder='url' onChange={(e) => {validateLink(e) }}/>
          <input type="text" className='form-control mt-3' placeholder='Image link'  onChange={(e)=>{setCourse({...course,image:e.target.value})}}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCourse}>
            Uplaod
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Adminpanel