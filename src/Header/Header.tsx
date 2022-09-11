import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__block">
          <Link to='/' className="header__logo">
            Аптека 112
          </Link>
          <div className='header__block-search block-search'>
            <button className='block-search__catalog'>
              Каталог
            </button>
            <input 
              className='block-search__input'
              type='text'
              placeholder="Пошук"/>
            <button className='block-search__btn'>
              Search
            </button>
          </div>
          <ul className='header__list header-list'>
            <li className='header-list__item'>
              <a href='/' className='header-list__link'>
                Консультація лікаря
              </a>
            </li>
            <li className='header-list__item'>
              <a href='/' className='header-list__link'>
                Кошик
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}