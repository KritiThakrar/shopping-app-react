import React from 'react'
import loginImage from '../images/login.png'

const Login = () =>
{
    return (
        <div className='d-flex align-items-center vh-90'>
            <div className='container-fluid mx-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img className='img-fluid' src={loginImage} height={700} width={850} alt="Login Image" />
                    </div>
                    <div className='col-5 ms-5 ps-3 pe-5 mt-8'>
                        <h1 className='fw-bold'>Login</h1>
                        <form>
                            <input type="email" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            <input type="password" className="form-control mt-4" id="exampleInputPassword1" placeholder="Password" />
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary-1 btn-lg mt-4">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
