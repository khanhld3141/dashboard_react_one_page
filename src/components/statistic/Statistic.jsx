import React from 'react'
import { AiFillTag, AiFillExperiment, AiFillDollarCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'


import './Statistic.css'
const Statistic = () => {

    return (
        <section className='statistic'>
            <div className="color1">
                <div className="sta-header">
                    <div className="logo">
                        <AiFillTag/>
                    </div>
                    <div className="content">
                        $123,456,789
                    </div>
                </div>
                <div className="sta-footer">
                    <div className="sales">TOTAL SALES</div>
                    <div className='inc-number red'>-18%</div>
                    <div className="icon red">
                        <AiOutlineArrowDown/>
                    </div>
                </div>

            </div>
            <div className="color2">
                <div className="sta-header">
                    <div className="logo">
                        <AiFillExperiment/>
                    </div>
                    <div className="content">
                        $123,456,789
                    </div>
                </div>
                <div className="sta-footer">
                    <div className="sales">TOTAL SALES</div>
                    <div className='inc-number red'>-18%</div>
                    <div className="icon red">
                        <AiOutlineArrowDown/>
                    </div>
                </div>

            </div>
            <div className="color3">
                <div className="sta-header">
                    <div className="logo">
                        <AiFillDollarCircle/>
                    </div>
                    <div className="content">
                        $123,456,789
                    </div>
                </div>
                <div className="sta-footer">
                    <div className="sales">TOTAL SALES</div>
                    <div className='inc-number green'>+18%</div>
                    <div className="icon green">
                        <AiOutlineArrowUp/>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Statistic