import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Edit = () => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
        description: ""
    })

    const dataHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setInputData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <div className="backBtn mt-5 mx-5">
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="InputName" name='name' onChange={dataHandler} value={inputData.name} />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="InputEmail" name='email' onChange={dataHandler} value={inputData.email} />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputAge" className="form-label">Age</label>
                            <input type="number" className="form-control" id='InputAge' name='age' onChange={dataHandler} value={inputData.age} />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputMobile" className="form-label">Mobile</label>
                            <input type="text" className="form-control" id='InputMobile' name='mobile' onChange={dataHandler} value={inputData.mobile} />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputWork" className="form-label">Work</label>
                            <input type="text" className="form-control" id='InputWork' name='work' onChange={dataHandler} value={inputData.work} />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="InputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id='InputAddress' name='address' onChange={dataHandler} value={inputData.address} />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows='5' name='description' onChange={dataHandler} value={inputData.description}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit
