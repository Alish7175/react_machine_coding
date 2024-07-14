import React, { useState } from 'react';
import { data } from './data';
import s from "./Accordian.module.css";

type AccordianOnePropType = {
    accordianData: typeof data
}

export const Accordian = ({accordianData}: AccordianOnePropType) => {
    const [activeId , setActiveId] = useState(1);

    const dataItems = accordianData?.map((item) => {
        return <div id='item__accordian_1' key={item.id} className={`accordian-item ${s.accordian_item}`}>
            <h3 className="accordian-title" onClick={() => setActiveId(item.id)}> {item.title } <span>{item.id === activeId ? '\u25BD' : '\u25B3'}</span></h3>
            {activeId === item.id ? <p className="accordian-description">{item.description}</p> : null}
        </div>
    })
    
  return (
    <div id="accordian_1" className={`${s.accordian}`}>
        <div id="container__accordian_1" className='accordian-container'>
            {dataItems.length ? dataItems : <p>No data found!!</p>}
        </div>
    </div>
  )
}
