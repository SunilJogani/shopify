import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header id='header' className='main-header py-[25px]'>
                <div className="container px-2">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-2/12 order-2 lg:order-1">
                            <div className="logo">
                                <Link to="/home">
                                    <img src={require('../image/logo.webp')} alt="logo" className='w-[185px]' />
                                </Link>
                            </div>
                        </div>
                        <div className="w-8/12 order-1 lg:order-2">
                            <div className="menu lg:block">
                                <nav>
                                    <ul className='navbar nav flex flex-wrap items-center justify-center'>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/home" className='nav-link'>Home</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/shopNow" className='nav-link'>Shop</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="#" className='nav-link'>Featured</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/cart" className='nav-link'>Cart</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="#" className='nav-link'>Blogs</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/addProduct" className='nav-link'>Add Products</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <button className="menu-toggle"><span></span> <span></span> <span></span></button>
                            </div>
                        </div>
                        <div className="w-2/12 order-3 lg:order-3">
                            <div className="cart-login-search">
                                <ul className='flex items-center justify-end'>
                                    <li className='px-[16px]'>
                                        <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                                    </li>
                                    <li className='px-[16px] hidden lg:block'>
                                        <a href="#"><i className="fa-regular fa-user"></i></a>
                                    </li>
                                    <li className='px-[16px] hidden lg:block'>
                                        <a href="#"><i className="fa-regular fa-heart"></i></a>
                                    </li>
                                    <li className='px-[16px]'>
                                        <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
