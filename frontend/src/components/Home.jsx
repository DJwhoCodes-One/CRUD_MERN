import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn">
                    <button className='btn btn-primary'>Add Data</button>
                </div>

                <table className='table mt-3'>
                    <thead>
                        <tr className='table-info'>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Number</th>
                            <th>CRUD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>DJwhoCODES</td>
                            <td>jaindevanshu79@gmail.com</td>
                            <td>MERN Stack Developer</td>
                            <td>6267018690</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-outline-primary'>Read</button>
                                <button className='btn btn-outline-warning'>Update</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>DJwhoCODES</td>
                            <td>jaindevanshu79@gmail.com</td>
                            <td>MERN Stack Developer</td>
                            <td>6267018690</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-outline-primary'>Read</button>
                                <button className='btn btn-outline-warning'>Update</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
