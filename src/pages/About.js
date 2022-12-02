import React from 'react'
import aboutImage from '../images/about.jpg'

export default function About()
{
    return (
        <div>
            <div className='container-fluid mt-5'>
                <div className='row ms-5 me-5 justify-content-md-center'>
                    <div className='col-4 bg-secondary bg-opacity-10 p-3'>
                        <div className='row align-items-center'>
                            <div className='col-md-auto text-center'>
                                <i className='bi bi-basket text-success display-5'></i>
                            </div>
                            <div className='col-md-auto'>
                                <div className='fs-5 fw-semibold'>FREE SHIPPING</div>
                                <div className='fs-6 text-mute'>On all order above $99</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 bg-secondary bg-opacity-10 p-3'>
                        <div className='row'>
                            <div className='col-md-auto text-center'>
                                <i className='bi bi-arrow-counterclockwise text-success display-5'></i>
                            </div>
                            <div className='col-md-auto'>
                                <div className='fs-5 fw-semibold'>ORDER RETURN</div>
                                <div className='fs-6'>Return within 7 days</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 bg-secondary bg-opacity-10 p-3'>
                        <div className='row'>
                            <div className='col-md-auto text-center'>
                                <i className='bi bi-phone-vibrate-fill text-success display-5'></i>
                            </div>
                            <div className='col-md-auto'>
                                <div className='fs-4 fw-semibold'>SUPPORT 24/7</div>
                                <div className='fs-6 fw-semibold'>Online support services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-8'>
                <div className='ms-2 me-2'>
                    <img src={aboutImage} class="img-fluid" alt="Responsive image" />
                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row gx-8 ms-1 me-2'>
                    <div className='fs-2 fw-bold mb-4 text-muted'>ABOUT US</div>
                    <div className='col'>
                        <div className='fs-6 text-muted'>
                            MolteStore has been a family-owned, designer furniture institution in Western Australia since 1997.
                            Having established a solid reputation built on honesty and integrity,
                            designFARM offer their customers a genuine experience.
                            We believe in good, authentic design, in order to do what we do best –
                            create meaningful spaces. You won’t find any replica’s here – we only source original
                            furniture, which is made under license. Why? Because we want your furniture to last a lifetime, as well as its story.
                        </div>
                    </div>
                    <div className='col'>
                        <ul className=''>
                            <li className='fs-6 text-muted'>MolteStore has been a family-owned in India since 1997.</li>
                            <li className='fs-6 text-muted'>Having established a solid reputation built on honesty and integrity.</li>
                            <li className='fs-6 text-muted'>We believe in good, authentic design, in order to do what we do best.</li>
                            <li className='fs-6 text-muted'>You won’t find any replica’s here – we only source original furniture.</li>
                            <li className='fs-6 text-muted'>Why? Because we want your furniture to last a lifetime, as well as its story.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='ms-4 me-4' />
            <div className='container-fluid mt-5'>
                <div className='row gx-8 ms-1 me-2'>
                    <div className='col mt-8'>
                        <div className='fs-6 fw-bold mb-4'>SAVING OUR ENVIRONMENT</div>
                        <div className='fs-1 fw-bold text-primary-1'>100 % ECO MATERIALS</div>
                    </div>
                    <div className='col mt-8'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
