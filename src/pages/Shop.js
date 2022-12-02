import React, { useState } from 'react';
import Pagination from "react-bootstrap/Pagination";

export default function Shop()
{
    const [state, setState] = useState({
        data: [
            {
                id: 1,

            }
        ],
        limit: 10,
        activePage: 1
    });
    const handlePageChange = (pageNumber) =>
    {
        setState((prev) => ({ ...prev, activePage: pageNumber }));
    };
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
            <div className='container-fluid mt-5'>
                <div className='row ms-5 me-5'>
                    <div className='col-2'>
                        <div className='fs-5 fw-bold'>FILTERS</div>
                        <div className='border-right'>
                            <hr />
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label className="form-check-label fs-small fw-semibold" for="flexRadioDefault1">
                                        Men
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label fs-small fw-semibold" for="flexRadioDefault2">
                                        Women
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div className='fw-bold fs-small'>CATEGORIES</div>
                            <div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                    <label class="form-check-label fs-small" for="flexCheckDefault">
                                        Tshirts
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Shirts
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Sweater
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Jackets
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Blazers
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Skirts
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Trousers
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Sunglasses
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Shoes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        Sandles
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div className='fw-bold fs-small'>PRICE</div>
                            <div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                    <label class="form-check-label fs-small" for="flexCheckDefault">
                                        ₹174-₹831
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        ₹831-₹1488
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        ₹1488-₹2145
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        ₹2145-₹2802
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div className='fw-bold fs-small'>SIZE</div>
                            <div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                    <label class="form-check-label fs-small" for="flexCheckDefault">
                                        XS
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        S
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        M
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        L
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        XL
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label fs-small" for="flexCheckChecked">
                                        XXL
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div class="card h-100">
                            <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-25.jpg?v=1543032994" width={265} height={350} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Fashion Store Clothing</h5>
                                <div class="card-text text-primary-1 fw-semibold"><strike className="text-muted pe-2">₹2000</strike>  ₹1299</div>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <span className='text-muted px-2'>No Reviews</span>
                            </div>
                        </div>
                        <Pagination className="px-4">
                            {state.data.map((_, index) =>
                            {
                                return (
                                    <Pagination.Item
                                        onClick={() => handlePageChange(index + 1)}
                                        key={index + 1}
                                        active={index + 1 === state.activePage}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                );
                            })}
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}
