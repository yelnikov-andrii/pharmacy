import { useState, useEffect } from "react";
import { getData, arrSelect } from "../Data/data";
import classNames from 'classnames';

type Props = {
  selectedGroup: string;
}

type Med = {
  category: string;
  id: string;
  img: string;
  name: string;
  medgroup: string[];
  dosage: string;
  form: string;
  number: string;
  produced: string;
  price: string;
}

export const MedGroups: React.FC <Props> = ({ selectedGroup }) => {
  const [medicines, setMedicines] = useState<Med[]>();
  const [selectedItem, setSelectedItem] = useState('За рейтингом');
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    getData()
      .then(res => {
        let products;
        if (res !== undefined) {
          products = res.filter((el: Med) => el.medgroup.includes(selectedGroup))
        }
        setMedicines(products);

      });
  }, []);

  return (
    <>
    <h1 className="medgroups">
      {selectedGroup}
    </h1>
    <div className="medgroups__btn-block">
    <button className="medgroups__btn medgroups__btn--active">
      Товари
    </button>
    <button className="medgroups__btn">
      Ціни
    </button>
    </div>
    <div className="medgroups__actionsBlock">
      <p className="medgroups__quantity">
        Товарів: <span className="medgroups__quantity-qty">{medicines?.length}</span>
      </p>
      <div className="medgroups__select medgroups-select">
      <p className="medgroups-select__main" onClick={() => {
        setOpenSelect(!openSelect);
      }}>
        {selectedItem}
      </p>
      <ul className={classNames("medgroups-select__content", {
        "medgroups-select__content--open": openSelect
      })}>
        {arrSelect.map(el => (
        <li 
          className="medgroups-select__content-item" 
          key={el}
          onClick={() => {
            setSelectedItem(el)
            setOpenSelect(!openSelect);
          }}>
          {el}
        </li>
        ))}
      </ul>
      </div>
    </div>
    <div className="medgroups__block">
      {medicines?.map(product => (
        <div className="medgroups__block-item product" key={product.id}>
          <div className="product__blockImg">
            <img className="product__img" src={product.img} />
          </div>
          <div className="product__blockTxt">
            <p className="product__blockTxt-title">
              {`${product.name} ${product.form} ${product.dosage} ${product.number}`}
            </p>
            <p className="product__blockTxt-company">
              {product.produced}
            </p>
            <div className="product__blockPrice">
              <p className="product__blockPrice-price">
                {product.price}
              </p>
              <div className="product__blockButtons">
              <button className="product__blockButtons-btn">
                <span className="product__blockButtons-btn_txt">
                  Де є
                </span>
              </button>
              <button className="product__blockButtons-btn">
                <span className="product__blockButtons-btn_txt">
                  До кошику
                </span>
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}