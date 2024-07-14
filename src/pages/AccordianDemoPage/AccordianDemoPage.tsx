import React from 'react'
import { Accordian } from '../../components/Accordian/Accordian'
import { data } from '../../components/Accordian/data'

export const AccordianDemoPage = () => {
    const accordianData = data;
  return (
    <div>
        <Accordian accordianData={accordianData} />
    </div>
  )
}

