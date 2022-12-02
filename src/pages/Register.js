import React from 'react'
import registerImage from '../images/register.png'
// import PhoneInput from 'react-phone-number-input'

export default function Register()
{
    return (
        <div className='d-flex align-items-center vh-90'>
            <div className='container-fluid mx-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img className='img-fluid' src={registerImage} height={700} width={850} alt="Login Image" />
                    </div>
                    <div className='col-5 ms-5 ps-3 pe-5 mt-8'>
                        <h1 className='fw-bold'>Signup</h1>
                        <form>
                            <input type="email" className="form-control mt-4" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            <input type="password" className="form-control mt-4" id="password" placeholder="Password" />
                            <input type="number" className="form-control mt-4" id="mobile" placeholder="Phone Number" />
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary-1 btn-lg mt-4">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
