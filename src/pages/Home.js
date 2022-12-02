import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import winterwear from '../images/winterwear.png';
import dress from '../images/dress.jpg';
import tshirt from '../images/tshirt.jpg';
import sunglasses from '../images/sunglasses.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BestSellers from '../components/BestSellers';
import Featured from '../components/Featured';

const Home = () =>
{
    return (
        <div>
            <Carousel fade variant='dark' indicators={false}>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/02_881e6f49-32b9-4b1e-90f8-855510e3d55a.jpg?v=1613509386' height={650}
                        alt='First slide'
                    />
                    <Carousel.Caption>
                        <h1 className='display-1 fw-bold mt-5 pt-4'><u className='u-class-1'>SALE</u></h1>
                        <div className='fs-2 fw-semibold'>UP TO <span className='text-primary-1'>40% OFF</span></div>
                        <div className='fs-5 fw-semibold'>DRESSES FOR WOMEN'S</div>
                        <button type='button' class='btn btn-primary-1 btn-lg mt-4 fs-6'>LEARN MORE </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/01_ac7c1d41-3593-4e52-8cda-3d9e67c02f4e.jpg?v=1613509386' height={650}
                        alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h1 className='display-1 fw-bold mt-5 pt-4'><u className='u-class-1'>SALE</u></h1>
                        <div className='fs-2 fw-semibold'>UP TO <span className='text-primary-1'>40% OFF</span></div>
                        <div className='fs-5 fw-semibold'>DRESSES FOR WOMEN'S</div>
                        <button type='button' class='btn btn-primary-1 btn-lg mt-4 fs-6'>LEARN MORE </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container-fluid mt-4'>
                <div className='row row-cols-4 mx-2'>
                    <div class='col-sm-3 ps-0'>
                        <img className='' src={tshirt} alt='tops' width={430} height={250}></img>
                        <div className='fs-4 fw-semibold text-float text-white'>TSHIRTS</div>
                        <div className='fs-5 text-float text-white'>Collection</div>
                        <a className='text-primary-1 text-float-more fw-semibold' href='/shop'>More</a>
                    </div>
                    <div class='col-sm-3'>
                        <img className='' src={sunglasses} alt='sunglasses' width={430} height={250}></img>
                        <div className='fs-4 fw-semibold text-float text-white'>SUNGLASSES</div>
                        <div className='fs-5 text-float text-white'>Collection</div>
                        <a className='text-primary-1 text-float-more fw-semibold' href='/shop'>More</a>
                    </div>
                    <div class='col-sm-3'>
                        <img className='' src={dress} alt='dress' width={430} height={250}></img>
                        <div className='fs-4 fw-semibold text-float text-white'>DRESSES</div>
                        <div className='fs-5 text-float text-white'>Collection</div>
                        <a className='text-primary-1 text-float-more fw-semibold' href='/shop'>More</a>
                    </div>
                    <div class='col-sm-3'>
                        <img className='' src={winterwear} alt='winterwear' width={430} height={250}></img>
                        <div className='fs-4 fw-semibold text-float text-white'>WINTERWEAR</div>
                        <div className='fs-5 text-float text-white'>Collection</div>
                        <a className='text-primary-1 text-float-more fw-semibold' href='/shop'>More</a>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row mx-2'>
                    <div class='col text-center bg-secondary bg-opacity-10 p-5'>
                        <i class='bi bi-basket text-primary-1 display-4'></i>
                        <div className='fs-4 fw-semibold mt-3'>FREE SHIPPING</div>
                        <div className='fs-6 fw-semibold'>Free shipping on all order above $99</div>
                    </div>
                    <div class='col text-center bg-secondary bg-opacity-10 p-5'>
                        <i class='bi bi-arrow-counterclockwise text-primary-1 display-4'></i>
                        <div className='fs-4 fw-semibold mt-3'>FREE SHIPPING</div>
                        <div className='fs-6'>Return within 7</div>
                    </div>
                    <div class='col text-center bg-secondary bg-opacity-10 p-5'>
                        <i class='bi bi-phone-vibrate-fill text-primary-1 display-4'></i>
                        <div className='fs-4 fw-semibold mt-3'>SUPPORT 24/7</div>
                        <div className='fs-6 fw-semibold'>Online support services</div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pt-4'>
                <Tabs defaultActiveKey='bestseller' id='uncontrolled-tab-example' className='mb-3'>
                    <Tab eventKey='bestseller' title='Best Sellers'>
                        <BestSellers />
                    </Tab>
                    <Tab eventKey='featured' title='Featured'>
                        <Featured />
                    </Tab>
                </Tabs>
            </div>
            <div className='container-fluid mt-5 pt-4 d-flex align-items-center'>
                <div className='row'>
                    <div className='col'>
                        <div class='card'>
                            <img className='' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/7uptheme_verycheap_09.jpg?v=1613509363' alt='sunglasses' width={870} height={350}></img>
                            <div class='card-img-overlay'>
                                <h5 class='card-title fw-bold'>HOT TREND</h5>
                                <button type='button' class='btn btn-primary-1 btn-lg mt-2 fs-6'>VIEW ALL PRODUCTS</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='col'>
                            <div class='card'>
                                <img className='' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/7uptheme_verycheap_10.jpg?v=1613509366' alt='man' width={870} height={350}></img>
                                <div class='card-img-overlay'>
                                    <h5 class='card-title fw-bold'>WEEKEND REDY</h5>
                                    <button type='button' class='btn btn-primary-1 btn-lg mt-2 fs-6'>VIEW ALL PRODUCTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pt-4'>
                <div className='row'>
                    <div className='col bg-warning-light'>
                        <Carousel variant='dark' indicators={false} className='px-8 py-5'>
                            <Carousel.Item>
                                <div class="row g-4">
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-2.jpg?v=1543033042" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹800</strike>  ₹600</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-4.jpg?v=1543033038" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1200</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="row g-4">
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-3.jpg?v=1543033040" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹4000</strike>  ₹3500</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-6.jpg?v=1543033033" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹1000</strike>  ₹799</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col bg-light'>
                        <Carousel variant='dark' indicators={false} className='px-8 py-5'>
                            <Carousel.Item>
                                <div class="row g-4">
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-8.jpg?v=1543033031" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹3000</strike>  ₹2000</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-9.jpg?v=1543033029" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1500</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="row g-4">
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-10.jpg?v=1543033027" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹4000</strike>  ₹3500</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-14.jpg?v=1543033018" width={265} height={350} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Fashion Store Clothing</h5>
                                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1500</div>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <span className='text-muted px-2'>No Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pt-4 d-flex align-items-center'>
                <div className='row'>
                    <div className='col'>
                        <div class='card'>
                            <img className='' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/7uptheme_verycheap_11.jpg?v=1613509376' alt='sunglasses' width={870} height={350}></img>
                            <div class='card-img-overlay'>
                                <h5 class='card-title fw-bold'>NEW ARRIVAL</h5>
                                <button type='button' class='btn btn-primary-1 btn-lg mt-2 fs-6'>VIEW ALL PRODUCTS</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='col'>
                            <div class='card'>
                                <img className='' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/7uptheme_verycheap_12.jpg?v=1613509379' alt='man' width={870} height={350}></img>
                                <div class='card-img-overlay'>
                                    <h5 class='card-title fw-bold'>FEATURED</h5>
                                    <button type='button' class='btn btn-primary-1 btn-lg mt-2 fs-6'>VIEW ALL PRODUCTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pt-4 text-center'>
                <div className='fs-1 fw-semibold text-secondary1 mt-3'>HAPPY CUSTOMERS</div>
                <div className=''>
                    <img className='mt-3' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/t/3/assets/icon-quotes.png?v=55371694519838866441543033074' alt='Coutes' />
                </div>
                <Carousel fade variant='dark' indicators={false} className='px-8 mx-5 py-5 text-center'>
                    <Carousel.Item>
                        <p className='font-italic fs-5 px-5'>I was always a big shopper, especially when it comes to either apparel or even accessories. Are these sunglasses, jewelry or purses – I need it all! The quality is also very good over here.</p>
                        <img className='mt-3' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/01.png?v=1613509227' alt='Coutes' />
                        <h5 className='fw-semibold mt-3'>Mrs. Rose</h5>
                        <p className='text-muted'>Marketer</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className='font-italic fs-5 px-5'>I have a thing for sunglasses, like I do indeed collect these and I have a real big range of it at home. Luckily, stores like this one let me indulge in this hobby furthermore!</p>
                        <img className='mt-3' src='https://cdn.shopify.com/s/files/1/0042/6691/7988/files/02.png?v=1613509227' alt='Coutes' />
                        <h5 className='fw-semibold mt-3'>Mrs. Rose</h5>
                        <p className='text-muted'>Marketer</p>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container-fluid'>
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
        </div>
    )
}

export default Home