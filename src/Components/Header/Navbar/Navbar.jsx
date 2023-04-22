import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarDatas from '../NavbarDatas'
import { Link, NavLink } from 'react-router-dom'
import MiniShoppingBasket from '../MiniShoppingBasket/MiniShoppingBasket'

export default function Navbar() {

    const [navbarData, setNavbarData] = useState(NavbarDatas)





    return (
        <div className='navbar-container'>
            <nav className='navbar1'>
                <ul className='main-menu-list'>
                    {navbarData.length && (
                        navbarData.map(nav => (
                            <li key={nav.id} className='main-menu-listitem'><NavLink to={nav.link}>{nav.title}</NavLink>

                                {nav.submenu && (
                                    <ul className={nav.oneLine ? 'main-submenu-list2' : 'main-submenu-list'}>
                                        {nav.menus.map(submenu => (
                                            <li key={submenu.id} className={nav.oneLine ? 'main-submenu-listitem2' : 'main-submenu-listitem'}>
                                                <NavLink className="submenu-title">{submenu.header}</NavLink>
                                                <ul className='submenu-list'>
                                                    {submenu.prods.length && (
                                                        submenu.prods.map(prod => (
                                                            <li key={prod.id} className='submenu-listitem'><NavLink to={prod.link}>{prod.title}</NavLink></li>
                                                        ))
                                                    )}
                                                </ul>
                                            </li>
                                        ))}
                                        {nav.submenu && (
                                            <img className='submenu-pic' src={nav.pic} alt="" />
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </nav>
            <MiniShoppingBasket/>
        </div>
    )
}
