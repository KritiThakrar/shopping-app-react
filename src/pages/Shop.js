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
                        <span className='fs-5 fw-bold mb-4'>FILTERS</span>
                        {/* clear all filters and set default */}
                        <span className='fs-7 fw-bold text-danger ms-5 ps-5' style={{ cursor: 'pointer' }}>Clear All</span>
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
                            <div className='mb-4 pb-4 border-bottom'>
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
                    <div className='col'>
                        <div className='row'>
                            <div className='col-md-2 offset-md-10 mb-4'>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Sort by:</option>
                                    <option value="1">Recomended</option>
                                    <option value="2">Better Discount</option>
                                    <option value="3">Price: High to Low</option>
                                    <option value="4">Price: Low to High</option>
                                </select>
                            </div>
                        </div>
                        <div className='row overflow-auto vh-80'>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-22.jpg?v=1543032997" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-21.jpg?v=1543033000" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-20.jpg?v=1543033002" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-19.jpg?v=1543033004" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-23.jpg?v=1543032995" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-25.jpg?v=1543032994" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-none d-md-block mb-3"></div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-26.jpg?v=1543032992" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/articles/7uptheme_verycheap_61.jpg?v=1543034031" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/articles/7uptheme_verycheap_38.jpg?v=1543034093" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-18.jpg?v=1543033006" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-17.jpg?v=1543033009" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-16.jpg?v=1543033012" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-none d-md-block mb-3"></div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-15.jpg?v=1543033015" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-14.jpg?v=1543033018" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-13.jpg?v=1543033020" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-12.jpg?v=1543033022" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-11.jpg?v=1543033025" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-10.jpg?v=1543033027" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-none d-md-block mb-3"></div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-9.jpg?v=1543033029" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-8.jpg?v=1543033031" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-7.jpg?v=1543033032" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-6.jpg?v=1543033033" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-5.jpg?v=1543033036" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-4.jpg?v=1543033038" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-none d-md-block mb-3"></div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-3.jpg?v=1543033040" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-2.jpg?v=1543033042" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/fashion-1.jpg?v=1543033045" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-2-1.jpg?v=1543032980" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-3-2_b385795c-6fec-4afe-a747-d1e3b7f1ff2e.jpg?v=1543032971" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-4-1_d7524ecd-8326-423b-bd49-27ef794e955f.jpg?v=1543032964" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-none d-md-block mb-3"></div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-3-1.jpg?v=1543032973" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-2-2_33815dbb-a4a8-45e2-a707-06686bbf5f2a.jpg?v=1543032950" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-1-3_b36d72d1-2152-4a07-947b-2042f64e2812.jpg?v=1543032985" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-3-4_94914d39-c8be-46b1-a3fb-129c6eb0d588.jpg?v=1543032966" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-3-3_bb8bc39c-1b92-4d7a-94f5-0b5c48a98687.jpg?v=1543032968" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card h-100">
                                    <img src="https://cdn.shopify.com/s/files/1/0042/6691/7988/products/look-2-4_436fd38e-6a72-4c07-9daa-452a10f1cd8b.jpg?v=1543032975" width={200} height={200} class="card-img-top" alt="..." />
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
                                    <div className='d-grid'>
                                        <button type="submit" className="btn btn-primary-1 btn-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
