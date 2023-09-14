import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Statistic from '../../components/statistic/Statistic';
import Shopping from '../../components/shopping/Shopping';
import Sale from '../../components/sales/Sales';
import Order from '../../components/orders/Orders';
import Analytic from '../../components/analytic/Analytic';
import Add from '../../components/add/Add';

import './DashBoard.css'

const DashBoard = () => {

  return (
    <section className='dashboard'>
      <Navbar />
      <div className="gird">
        <div className="gird_1">
          <Statistic />
          <Sale />
          <Order />
        </div>
        <div className="gird_2">
          <Analytic />
          <Shopping />
          <Add />
        </div>
      </div>
    </section>
  )
}

export default DashBoard