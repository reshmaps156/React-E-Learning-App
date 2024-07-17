import React from 'react'
import Card from 'react-bootstrap/Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../../services/allApi';



function Other({displayCourse, setDeleteVideoStatus}) {
    console.log(displayCourse);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async(id)=>{
        const result = await deleteVideoApi(id)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setDeleteVideoStatus(result.data)
        }
    }

    return (
        <>
            <Card style={{ width: '100%' }} className='mt-4'>
                <Card.Img onClick={handleShow} variant="top" src={displayCourse?.image} width={'100%'} height={'200px'} />
                <Card.Body className='d-flex'>
                    <Card.Text className='text-primary'>
                        {displayCourse?.title}
                    </Card.Text>
                    <button className='btn btn-danger ms-auto' onClick={()=>handleDelete(displayCourse?.id)}><FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /></button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayCourse?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src={`${displayCourse?.url}?autoplay=1`} title="Python Full Course for free 🐍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Other