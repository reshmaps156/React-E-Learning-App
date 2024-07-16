import React from 'react'


function Content({course}) {
  return (
    <>
       
    <div className="card mb-3 mt-3 " >
  <div className="row g-0 ">
    <div className="col-md-4">
      {/* <img src={course.image} alt="" className='w-100' height={'150px'}/> */}
      <iframe width="100%" height="150px" src={course.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">This is a wider card with supporting text below</p>
       
     
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Content