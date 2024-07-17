
import './profile.css'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Reviews from './Reviews'
import Book from './Book'
import Wishlist from './Wishlist'
import Myprofile from './Myprofile'
import Enrolledcourses from './Enrolledcourses'
import Dashboard from './Dashboard'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import './profile.css'
import { faPowerOff, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Adminpanel from './Adminpanel'
import { addVideoApi, loginUser } from '../../services/allApi'
import Lecture from './Lecture'
import Other from './Other';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Carosal from './Carosal';



function Profile({ username }) {
    const navigate = useNavigate()
    const [review, setReview] = useState(false);
    const [displaybook, setDisplayBook] = useState(false)
    const [displayWishlist, setDisplayWishlist] = useState(false)
    const [displayProfile, setDisplayProfile] = useState(false)
    const [displayEnrolled, setDisplayEnrolled] = useState(false)
    const [displayDashboard, setDisplayDashboard] = useState(true)
    const [displayOtherCourse, setDisplayOtherCourse] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setCoursevideo({
            title: "",
            image: "",
            url: ""
        })
    };
    const handleShow = () => setShow(true);

    const [addStatus, setAddStatus] = useState([])

    const [coursevideo, setCoursevideo] = useState({
        title: "",
        image: "",
        url: ""
    })

    const valiadateCourse = (e) => {
        // console.log(e.target.value);
        const course = e.target.value
        if (course.endsWith('?si=fgC7Ew9-B-MhOzfX')) {
            const yTkey = course.slice(-31, -20)
            // console.log(yTkey);
            let embedCourse = `https://www.youtube.com/embed/${yTkey}`
            setCoursevideo({ ...coursevideo, url: embedCourse })
        }
        else if (course.startsWith('https://www.youtube.com/watch?')) {
            const yTkey = course.slice(29, 40)
            // console.log(yTkey);
            let embedCourse = `https://www.youtube.com/embed/${yTkey}`
            setCoursevideo({ ...coursevideo, url: embedCourse })
        }
        else if (course.startsWith('https://youtu.be')) {
            const yTkey = course.slice(17, 28)
            // console.log(yTkey);
            let embedCourse = `https://www.youtube.com/embed/${yTkey}`
            setCoursevideo({ ...coursevideo, url: embedCourse })
        }

        else {
            const yTkey = course.slice(-11)
            // console.log(yTkey);
            let embedCourse = `https://www.youtube.com/embed/${yTkey}`
            setCoursevideo({ ...coursevideo, url: embedCourse })
        }

    }

    // console.log(coursevideo);

    const handleUpload = async (e) => {
        e.preventDefault()
        const { title, image, url } = coursevideo

        if (!title || !image || !url) {
            toast.info('Please fill the form completely')
        }
        else {
            const result = await addVideoApi(coursevideo)
            // console.log(result);
            if (result.status >= 200 && result.status < 300) {
                toast.success('video Uploaded successfully')
                setAddStatus(result.data)
                handleClose()
            }
            else {
                toast.error('something went wrong')
                handleClose()
            }
        }
    }

    const handleLogout = () => {
        toast('You have logged out!!')
        navigate('/home')
    }

    const handleBook = () => {
        setDisplayBook(true)
        setDisplayWishlist(false)
        setDisplayEnrolled(false)
        setDisplayOtherCourse(false)
        setDisplayProfile(false)
        setDisplayDashboard(false)
        setReview(false)

    }
    const handleReview = () => {
        setReview(true)
        setDisplayOtherCourse(false)
        setDisplayWishlist(false)
        setDisplayBook(false)
        setDisplayEnrolled(false)
        setDisplayProfile(false)
        setDisplayDashboard(false)
    }
    const handleWishlist = () => {
        setDisplayWishlist(true)
        setDisplayBook(false)
        setDisplayEnrolled(false)
        setDisplayOtherCourse(false)
        setDisplayProfile(false)
        setDisplayDashboard(false)
        setReview(false)
    }
    const handleProfile = () => {

        setDisplayWishlist(false)
        setDisplayBook(false)
        setDisplayEnrolled(false)
        setDisplayOtherCourse(false)
        setDisplayProfile(true)
        setDisplayDashboard(false)
        setReview(false)

    }
    const handleEnrolled = () => {
        setDisplayEnrolled(true)
        setDisplayWishlist(false)
        setDisplayBook(false)
        setDisplayOtherCourse(false)
        setDisplayProfile(false)
        setDisplayDashboard(false)
        setReview(false)
    }
    const handleDashBoard = () => {
        setDisplayDashboard(true)
        setDisplayWishlist(false)
        setDisplayBook(false)
        setDisplayEnrolled(false)
        setDisplayOtherCourse(false)
        setDisplayProfile(false)
        setReview(false)
    }
    const handleOtherCourse = () => {
        setDisplayOtherCourse(true)
        setDisplayWishlist(false)
        setDisplayBook(false)
        setDisplayEnrolled(false)
        setDisplayProfile(false)
        setDisplayDashboard(false)
        setReview(false)
    }


    const handleAdmin = async () => {
        const result = await loginUser()

        const roll = result.data.map((data) => data.roll)
        console.log(roll);
    }
    handleAdmin()


    return (
        <>
            {/*components part */}

            <div className='d-flex row profileAlignment'>
                <div className='shadow px-3 col-md-3' >
                    <div className='py-4 ms-4 me-3 mt-3 d-flex'>

                        <FontAwesomeIcon icon={faBuildingColumns} size='4x' className='text-danger ms-5 px-5' />

                    </div>

                    <div className='py-1 ms-3'>
                        <div className='ms-2 py-2 '> <button className='btn btn-success w-100'><Adminpanel /></button></div>

                        <div className='ms-2 py-2 '><button className='btn btn-danger w-100' onClick={handleDashBoard}><FontAwesomeIcon icon={faLayerGroup} className='px-4' size='2x' />Dashboard</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-danger w-100' onClick={handleProfile}><FontAwesomeIcon icon={faUser} className='px-4' size='2x' />My Profile</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-danger w-100' onClick={handleEnrolled}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Enrolled Courses</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-danger w-100' onClick={handleOtherCourse}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Other Courses</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-danger w-100' onClick={handleBook}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Books</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-danger w-100' onClick={handleWishlist}><FontAwesomeIcon icon={faHeart} className='px-4' size='2x' />Wishlist</button></div>

                        <div className='ms-2 py-2' >

                            <button type='button' className='btn btn-danger w-100' onClick={handleReview}><FontAwesomeIcon icon={faStar} className='px-4' size='2x' />Reviews</button>
                        </div>
                    </div>
                    {/*carosal part/ ads */}
                    <div className=''>
                        <Carosal />
                    </div>
                </div>


                {/*profile navbars field */}
                <div className='col-md-9 '>
                    <div className="row w-100 d-flex justify-content-between bg-danger align-items-center ">
                        <div className="col-md-9  col-6">
                            <div className='d-flex '>
                                <label htmlFor="profileimg">
                                    <input id='profileimg' type="file" style={{ display: 'none' }} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/9094/9094119.png" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} className='mt-3  mb-3 displayPic' />
                                </label>
                                <div className='mt-5 ms-4'>
                                    <h3 className='text-light fw-bold mt-3' style={{ textTransform: 'capitalize' }}>Welcome<span className='text-info'> {username}</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-6">
                            <div className='d-flex align-items-center'>
                                <button className='btn btn-danger ' onClick={handleShow}><FontAwesomeIcon icon={faPlus} />Add New Courses</button>
                                <div>
                                    <FontAwesomeIcon icon={faPowerOff} className=' ms-3' size='2xl' style={{ color: "#FFD43B", }} onClick={handleLogout} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Please fill the following details</p>
                            <form className='border p-3 rounded border-secondary'>
                                <input type="text" placeholder='Course Title' className='form-control' onChange={(e) => setCoursevideo({ ...coursevideo, title: e.target.value })} />
                                <input type="text" placeholder='Course Image' className='form-control mt-3' onChange={(e) => setCoursevideo({ ...coursevideo, image: e.target.value })} />
                                <input type="text" placeholder='Course Url' className='form-control mt-3' onChange={(e) => valiadateCourse(e)} />
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleUpload}>
                                upload
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="row ">
                        <div>
                            {displayDashboard &&
                                <div className='shadow mt-3 p-4 me-3 '>
                                    <Lecture />
                                    <Dashboard />

                                </div>}

                            {displaybook && <Book />}

                            {review &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Reviews />
                                </div>}

                            {displayWishlist &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Wishlist />
                                </div>}
                            {displayProfile &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Myprofile />
                                </div>}
                            {displayEnrolled &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Enrolledcourses />
                                </div>}
                            {displayOtherCourse &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Other addStatus={addStatus} />
                                </div>}
                        </div>
                    </div>
                </div>
                <div />
            </div>
            <ToastContainer  position='top-center' autoClose={1000} transition={Zoom}/>
        </>
    )
}

export default Profile




