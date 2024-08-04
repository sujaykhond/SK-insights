import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
    ];

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='20px' />
                        </Link>
                    </div>
                    <div className='hidden md:flex md:items-center md:space-x-4 md:justify-center flex-grow'>
                        {navItems.filter(item => item.name !== 'Login' && item.name !== 'Signup').map((item) =>
                            item.active ? (
                                <li key={item.name} className='list-none'>
                                    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate(item.slug)}>{item.name}</button>
                                </li>
                            ) : null
                        )}
                    </div>
                    <div className='flex items-center space-x-4'>
                        {authStatus ? (
                            <LogoutBtn />
                        ) : (
                            <>
                                {navItems.filter(item => item.name === 'Login' || item.name === 'Signup').map((item) =>
                                    <li key={item.name} className='list-none'>
                                        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate(item.slug)}>{item.name}</button>
                                    </li>
                                )}
                            </>
                        )}
                        <div className='md:hidden'>
                            <button onClick={handleToggleMenu}>
                                {isMenuOpen ? <XIcon className='h-8 w-8' /> : <MenuIcon className='h-8 w-8' />}
                            </button>
                        </div>
                    </div>
                </nav>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col items-center space-y-4'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='list-none'>
                                    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate(item.slug)}>{item.name}</button>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
            </Container>
        </header>
    );
}

export default Header;
