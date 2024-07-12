import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function LandingpageFAQ() {
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facere corporis tenetur quisquam dignissimos rem nesciunt accusamus repellendus ea numquam, deleniti ullam corrupti unde saepe? Explicabo enim molestias assumenda accusamus.'
    return (
        <>
            <p className='text-warning'>Courses</p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='border rounded-0'>What is Bloomify ? </Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header className='border rounded-0'>How do i sign up ?</Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mt-3'>
                    <Accordion.Header className='border rounded-0'>How do i enroll in a course</Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <p className='text-warning mt-3'>Payments</p>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='border rounded-0'>How do i pay for a course ?  </Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mt-3'>
                    <Accordion.Header className='border rounded-0'>Are there any discounts available?</Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mt-3'>
                    <Accordion.Header className='border rounded-0'>Can i get a refund if iam not satisfied with a course</Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <p className='text-warning mt-3'>Certificates</p>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='border rounded-0'>Do i get certificate after completing a course ? </Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mt-3 mb-5'>
                    <Accordion.Header className='border rounded-0'>How do i access my certificates ? </Accordion.Header>
                    <Accordion.Body>
                        {lorem}
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </>
    )
}

export default LandingpageFAQ