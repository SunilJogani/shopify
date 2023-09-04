import React from 'react';

function Cart() {


    return (
        <>
            <section>
                <div className="bg-[#f6f6f6]">
                    <div className="container">
                        <div className="breadcrumb_collection">
                            <nav className="flex py-3" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center hover:text-[#4b9e22] text-[16px] ">
                                            Home
                                        </a>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span className="ml-1 text-[16px] font-medium text-[#4b9e22] md:ml-2">Your Shopping Cart</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="page-cart py-12">
                    <div className="content-page">
                        <div className="container">
                            <div className="content-about content-cart-page">
                                <form>
                                    <div className="table-responsive block w-full overflow-x-auto">
                                        <table className="shop_table table--responsive cart table">
                                            <thead>
                                                <tr className="cart-title">

                                                    <th colspan="2" className="product-thumbnail text-left"> Product name</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">&nbsp;</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="cart_item">
                                                    <td data-label="Product Name" className="product-thumbnail">
                                                        <a href="#"><img loading="lazy" width="" height="" src="//fiuce-store-demo.myshopify.com/cdn/shop/products/10.1.jpg?crop=center&amp;height=100&amp;v=1676275251&amp;width=100" alt="Raspberry" /></a>
                                                    </td>
                                                    <td className="product-name-thumb" data-title="Product">
                                                        <a href="#" className='text-black'>Raspberry</a>
                                                    </td>
                                                    <td data-label="Product Price" className="product-price" data-title="Price">
                                                        <span className="amount">$25.00</span>
                                                    </td>
                                                    <td data-label="Quantity" className="product-quantity" data-title="Quantity">
                                                        <div className="js-qty">
                                                            <button type='button' className='qty_minus'>
                                                                <span className="fa fa-caret-down"></span>
                                                            </button>
                                                            <input type="text" className='js-qty__num text-left' value={1} min={1} name='quantity' />
                                                            <button type='button' className='qty_plus'>
                                                                <span className="fa fa-caret-up"></span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td data-label="Sub Total" className="product-subtotal" data-title="Total">
                                                        <span className="amount">$25.00</span>
                                                    </td>
                                                    <td className="product-remove">
                                                        <a className="remove set-12-svg" href="/cart/change?line=1&amp;quantity=0">✕</a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart_totals ">
                                        <div className="cart-update">
                                            <input type="submit" value="Update Cart" name="update_cart" className="button bg-color" fdprocessedid="i1adwn" />
                                        </div>
                                        <div className="continue-shopping-1">
                                            <a href="/collections/all">Continue Shopping</a>
                                        </div>

                                        <div className="cart-check">
                                            <h2 className="cart-title">CART TOTALS</h2>
                                            <hr />
                                            <table className="total-checkout w-full">
                                                <tbody>
                                                    <tr>
                                                        <th className="cart-label text-left"><span>Total</span></th>
                                                        <td className="cart-amount"><span><strong><span className="amount">$70.00</span></strong> </span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="wc-proceed-to-checkout clearfix">
                                                <a className="checkout-button button alt wc-forward bg-color" href="/checkout">Proceed to checkout</a>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
