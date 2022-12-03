import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ChangeAddressModal(props)
{
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Delivery Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='fs-small fw-bold'>Contact Details</div>
                    <input type="name" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    <input type="number" className="form-control mt-3" id="mobile" placeholder="Phone Number" />
                    <div className='fs-small fw-bold mt-4'>Address</div>
                    <input type="number" className="form-control mt-3" id="mobile" placeholder="Pin Code" />
                    <input type="address" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="address" placeholder="Enter Address(House No,Building, Street, Area)" />
                    <input type="locality" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="locality" placeholder="Locality/Town*" />
                    <input type="city" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="city" placeholder="City/District*" />
                    <input type="state" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="state" placeholder="State" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary-1'>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Cart()
{
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className='container-xxl mt-5'>
                <div class="card me-8">
                    <div className='row pe-0'>
                        <div className='col'>
                            <div class="card-body">
                                <div className='fw-bold'>Deliver to: <span>Kriti Thakrar</span></div>
                                <div className='fs-small'>1234, 5th Avenue, New York, NY 10001</div>
                            </div>
                        </div>
                        <div className='col mt-3 me-3 text-end'>
                            <Button variant="primary-1" onClick={() => setModalShow(true)}>
                                CHANGE ADDRESS
                            </Button>
                            <ChangeAddressModal show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </div>
                <div className='row gx-8 mt-5 align-items-center'>
                    <div className='col-7 overflow-auto vh-50'>
                        <div class="card">
                            <div className='row pe-0'>
                                <div className='col-3'>
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-13.jpg?v=1543033020" width={150} height={150} class="card-img-top py-2 ps-2" alt="..." />
                                </div>
                                <div className='col mt-3'>
                                    <div className='fs-small fw-semibold'>Fashion Store Clothing</div>
                                    <div className='fs-small'>Size: M</div>
                                    <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1299</div>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <span className='text-muted px-2'>No Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4">
                            <div className='row pe-0'>
                                <div className='col-3'>
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-13.jpg?v=1543033020" width={150} height={150} class="card-img-top py-2 ps-2" alt="..." />
                                </div>
                                <div className='col mt-3'>
                                    <div className='fs-small fw-semibold'>Fashion Store Clothing</div>
                                    <div className='fs-small'>Size: M</div>
                                    <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1299</div>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <span className='text-muted px-2'>No Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4">
                            <div className='row pe-0'>
                                <div className='col-3'>
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-13.jpg?v=1543033020" width={150} height={150} class="card-img-top py-2 ps-2" alt="..." />
                                </div>
                                <div className='col mt-3'>
                                    <div className='fs-small fw-semibold'>Fashion Store Clothing</div>
                                    <div className='fs-small'>Size: M</div>
                                    <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1299</div>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <span className='text-muted px-2'>No Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4">
                            <div className='row pe-0'>
                                <div className='col-3'>
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-13.jpg?v=1543033020" width={150} height={150} class="card-img-top py-2 ps-2" alt="..." />
                                </div>
                                <div className='col mt-3'>
                                    <div className='fs-small fw-semibold'>Fashion Store Clothing</div>
                                    <div className='fs-small'>Size: M</div>
                                    <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1299</div>
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
                    <div className='col-4'>
                        <div className='fs-small fw-bold'>Price Details(2 items)</div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <div className='fs-small'>Total MRP</div>
                                <div className='fs-small'>Discount on MRP</div>
                                <div className='fs-small'>Convenience Fee</div>
                            </div>
                            <div className='col text-end'>
                                <div className='fs-small'>₹1948</div>
                                <div className='fs-small'>₹-1994</div>
                                <div className='fs-small'><strike>₹99</strike><span className='text-success'>FREE</span></div>
                            </div>
                            <hr className='mt-3 me-5' />
                            <div class="w-100 d-none d-md-block"></div>
                            <div className='col'>
                                <div className='fs-small fw-bold'>Total Amount</div>
                            </div>
                            <div className='col text-end'>
                                <div className='fs-small fw-bold'>₹1948</div>
                            </div>
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary-1 btn-lg mt-4">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 d-none d-md-block"></div>
                </div>
            </div>
        </div >
    )
}
