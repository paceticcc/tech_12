import './header.css';

import { NavLink } from 'react-router-dom';

function Header () {
    return <header className='header'>
        <div className='container'>
            <div className='header_row'>
                <NavLink to="/" className='header_logo'>
                    <span>QPICK</span>
                </NavLink>

                <div className='quick_search'>
                        <div className='phone_icon'></div>
                        <span>Выбрать модель телефона</span>
                        <button className='quick_search__icon'></button>
                </div>

                <nav className='header_nav'>
                    <ul>

                        {/* Переделать import изображений и присовить classname в navlink */}
                        <NavLink to="/liked">
                            <li><button className='like_cion'></button></li>
                        </NavLink>

                        <NavLink to="/basket">
                            <li><button className='cart_cion'></button></li>
                        </NavLink>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
}


export default Header;