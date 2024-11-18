import './header.css';


function Header () {
    return <header className='header'>
        <div className='container'>
            <div className='header_row'>

                <div className='header_logo'><span>QPICK</span></div>

                <div className='quick_search'>
                        <div className='phone_icon'></div>
                        <span>Выбрать модель телефона</span>
                        <button className='quick_search__icon'></button>
                </div>

                <nav className='header_nav'>
                    <ul>
                        <li><button className='like_cion'></button></li>
                        <li><button className='cart_cion'></button></li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
}


export default Header;