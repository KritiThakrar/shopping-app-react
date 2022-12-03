import React from 'react'

export default function Footer()
{
    return (
        <div>
            <div className='container-fluid mt-8'>
                <div className='row'>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img1.jpg?v=6339463309123514766' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img2.jpg?v=7112495757139841473' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img3.jpg?v=39368396558490134' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img4.jpg?v=13154479712404424444' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img5.jpg?v=12391025609665292208' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img6.jpg?v=10695870388547690407' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img7.jpg?v=10352718537273736136' width={225} alt='Coutes' />
                    </div>
                    <div className='col px-0'>
                        <img src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/engo_ins_img8.jpg?v=2072247497219566948' width={217} height={225} alt='Coutes' />
                    </div>
                </div>
            </div>
            <div class="container mt-3">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <div className='fw-bold'>CUSTOMER SERVICE</div>
                            <ul class="nav flex-column mt-3">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Customer Service</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Shipping</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Returns</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Buy gift cards</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Size charts</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <div className='fw-bold'>INFORMATION</div>
                            <ul class="nav flex-column mt-3">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQ</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Jobs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Blog</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <div className='fw-bold'>GET IN TOUCH</div>
                            <ul class="nav flex-column mt-3">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">shopilaunch@gmail.com</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">support@shopilaunch.com</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+(938) 1678 311 160</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Support available 10am–6pm ET Monday through Friday</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form className='me-4'>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary-1" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-facebook fs-4"></i></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-instagram fs-4"></i></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-twitter fs-4"></i></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-youtube fs-4"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}
