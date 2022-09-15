import { Link } from "react-router-dom";
import { arrMainItems } from "../Data/data";

export const MainPage = () => {
  return (
    <>
    <h1 className='main-page__title'>
          Аптека 1-1-2 — Онлайн супермаркет здоров`я
        </h1>
        <ul className="main-page__list main-page-list">
          {arrMainItems.map(item => (
            <li className="main-page-list__item" key={item.id}>
                <Link 
                  className="main-page-list__link" 
                  to={item.url}
                >
                  <img
                    src={item.img}
                    className='main-page-list__img'
                    alt="img"
                  />
                  {item.name}
                </Link>
            </li>
          ))}
        </ul>
    </>
  )
}