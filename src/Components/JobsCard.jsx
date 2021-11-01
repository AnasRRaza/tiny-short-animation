import React from 'react'

const JobsCard = () => {

  const arr = [1, 2, 3];

  return (
    <div className="w-100 d-flex justify-content-around flex-wrap">
      {
        arr.map((ele, ind) => {
          return (
            <div className="card mx-2 my-5" style={{ width: '18rem' }} key={ind}>
              <img src="https://www.w3schools.com/bootstrap4/img_avatar5.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default JobsCard
