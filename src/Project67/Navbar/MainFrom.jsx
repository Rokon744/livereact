import React, { useState } from "react";

const MainFrom = () => {
    const [val, setVal] = useState({
        nam: '',
        phn: '',
        mail: '',
        msg: ''
    })

    const getValue = (event) => {
        let name = event.target.name
        let value = event.target.value

        setVal((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`My name is ${val.nam}. My Phone number is ${val.phn}. Email: ${val.mail}. Massage: ${val.msg}`)
        setVal({
            nam: '',
            phn: '',
            mail: '',
            msg: ''
        })
    }
    return (
        <>
            <form className="col-md-10" action="#" method="get" onSubmit={formSubmit}>
                <div>Full Name</div>
                <input name="nam" value={val.nam} onChange={getValue} placeholder="Name" type="text" className="form-control mb-3" />
                <div>Phone</div>
                <input name="phn" value={val.phn} onChange={getValue} placeholder="Phone Number" type="number" className="form-control mb-3" />
                <div>Email Adress</div>
                <input name="mail" value={val.mail} onChange={getValue} placeholder="Email" type="email" className="form-control mb-3" />
                <div>Massage</div>
                <textarea name="msg" value={val.msg} onChange={getValue} className="form-control" rows='4' />
                <button type="submit" className="btn btn-outline-primary mt-4">Submit Form</button>
            </form>
        </>
    )
};

export default MainFrom;