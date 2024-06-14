import React from 'react'
import { NavLink } from 'react-router-dom'

const CardDetails = () => {
    return (
        <div>
            <div className="navlink mt-5 mx-5">
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className="container">
                <h2>Welcome, <span style={{ fontWeight: '700', color: 'rgb(28, 130, 194)' }}>DJwhoCODES !</span></h2>

                <div className="card mt-5" style={{ width: '40vw' }}>
                    <img src="../../public/goku.jpeg" className="card-img-top" alt="user" />
                    <div className="card-body d-flex align-items-end justify-content-between flex-wrap">
                        <h4 className="card-title">Name: DJwhoCODES</h4>
                        <div className="btns d-flex gap-2 mt-3">
                            <button className='btn btn-outline-warning'>Edit</button>
                            <button className='btn btn-outline-danger'>Delete</button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h5>Age:</h5> 23</li>
                        <li className="list-group-item"><h5>Email:</h5> jaindevanshu79@gmail.com</li>
                        <li className="list-group-item"><h5>Mobile:</h5> 6267018690</li>
                        <li className="list-group-item"><h5>Work:</h5> MERN Stack Developer</li>
                        <li className="list-group-item"><h5>Address:</h5> Gwalior</li>
                        <li className="list-group-item"><h5>Description:</h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde ut nulla natus, culpa suscipit. Aperiam excepturi voluptatum aut architecto.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
