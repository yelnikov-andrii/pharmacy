import { Link, Routes, Route } from "react-router-dom";
import { MedGroups } from "./MedGroups";
import { arrmedicinesGroups } from "../Data/data";
import classNames from "classnames";
import { useState } from "react";

type Subgroup = {
  name: string;
  subgroups2?: string[];
};

type MedGroup = {
  id: number;
  name: string;
  subgroups?: Subgroup[];
};

export const Medicines = () => {
  const [openedLists, setOpenedLists] = useState<any>([]);

  const toggleList = (value: any) => {
    setOpenedLists((prev: any) => {
      if (prev.includes(value)) {
        return prev.filter((e: any) => e !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  return (
      <>
      <Routes>
        <Route path="" element={
          <>
          <h1 className="medicines__title">
        Лікарські засоби
      </h1>
        <ul className="medicines__list">
        {arrmedicinesGroups.map((item: MedGroup) => (
          <li className="medicines__list-item" key={item.id}>
            {item.hasOwnProperty('subgroups') && (
              <button className={classNames("medicines__list-item_button", {
                "medicines__list-item_button--opened": openedLists.includes(item.name)
              })} onClick={() => {
                toggleList(item.name)
              }}>
                {openedLists.includes(item.name) ? (
                  '-'
                ) : ('+')}
              </button>
            )}
            <Link to={item.name} className='medicines__list-link'>
              {item.name}
            </Link>
            {item.hasOwnProperty('subgroups') && (
              <ul className={classNames("medicines__list-link_list", {
                "medicines__list-link_list--opened": openedLists.includes(item.name)
              })}>
                {item.subgroups?.map((e: Subgroup) => (
                  <li className="medicines__list-item">
                    {e.hasOwnProperty('subgroups2') && (
              <button className="medicines__list-item_button" onClick={() => {
                toggleList(e.name)
              }}>
                {openedLists.includes(e.name) ? (
                  '-'
                ) : ('+')}
              </button>
            )}
                    <Link to={e.name} className='medicines__list-link'>
                      {e.name}
                    </Link>
                    {e.hasOwnProperty('subgroups2') && (
                      <ul className={classNames("medicines__list-link_list", {
                        "medicines__list-link_list--opened": openedLists.includes(e.name)
                      })}>
                        {e.subgroups2?.map((el: string) => (
                          <li className="medicines__list-item">
                            <Link to={el}>
                            {el}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        </ul>
          </>
        }>
        </Route>
        {arrmedicinesGroups.map(group => (
          <Route path={group.name} element={<MedGroups selectedGroup={group.name}/>} key={group.id}>
          </Route>
        ))}
        {arrmedicinesGroups.map(el => (
          el.hasOwnProperty('subgroups') && (
            el.subgroups?.map((e) => (
              <Route path={e.name} element={<MedGroups selectedGroup={e.name} />}>
              </Route>
            ))
          )
        ))}
        {arrmedicinesGroups.map((el: MedGroup) => (
          el.hasOwnProperty('subgroups') && (
            el.subgroups?.map((e: Subgroup) => (
              e.hasOwnProperty('subgroups2') && (
                e.subgroups2?.map((el: string) => (
                  <Route path={el} element={<MedGroups selectedGroup={el}/>}>

                  </Route>
                ))
              )
            ))
          )
        ))}
      </Routes>
      </>
    )
}