import React from 'react'
import aboutImage from '../images/about.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

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
            <hr className='ms-5 me-4' />
            <div className='container-fluid mt-5'>
                <div className='row gx-8 ms-1 me-2 mt-5'>
                    <div className='col'>
                        <div className='fs-6 fw-bold mb-2'>SAVING OUR ENVIRONMENT</div>
                        <div className='fs-3 fw-bold text-primary-1'>100 % ECO MATERIALS</div>
                        <div className='fs-6 text-muted'>
                            Fashion production makes up 10% of humanity's carbon emissions, dries up water sources,
                            and pollutes rivers and streams. What's more, 85% of all textiles go to the dump each year
                            (UNECE, 2018), and washing some types of clothes sends significant amount of microplastics into the ocean.
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <span className='fs-6 text-muted'>Cotton</span>
                        <span className='fs-6 text-muted ps-2'>70%</span>
                        <ProgressBar className='mb-4' variant="success" now={70} />
                        <span className='fs-6 text-muted'>Material</span>
                        <span className='fs-6 text-muted ps-2'>80%</span>
                        <ProgressBar className='mb-4' variant="success" now={80} />
                        <span className='fs-6 text-muted'>Satin</span>
                        <span className='fs-6 text-muted ps-2'>40%</span>
                        <ProgressBar className='mb-4' variant="success" now={40} />
                    </div>

                </div>
            </div>
        </div>
    )
}
