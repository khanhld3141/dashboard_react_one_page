import React from 'react'
import './Shopping.css'
import {
    AiOutlineShoppingCart,
    AiOutlineShopping,
    AiOutlineTeam,
    AiOutlineCaretDown,
    AiOutlineCaretUp
} from 'react-icons/ai';
const Shopping = () => {

    return (
        <section className='shopping'>
            <div className="shopping_details">
                <div className="icon color1">
                    <AiOutlineShoppingCart />
                </div>
                <h1>ONLINE ORDERS</h1>
                <div className="shopping_foot">
                    <span>12302</span>
                    <span className="up"><AiOutlineCaretUp /></span>
                    <span>150</span>
                </div>
            </div>
            <div className="shopping_details">
                <div className="icon  color2">
                    <AiOutlineShoppingCart />
                </div>
                <h1>OFFLINE ORDERS</h1>
                <div className="shopping_foot">
                    <span>12302</span>
                    <span className="down"><AiOutlineCaretDown /></span>
                    <span>150</span>
                </div>
            </div>
            <div className="shopping_details ">
                <div className="icon color3">
                    <AiOutlineTeam />
                </div>
                <h1>TOTAL USERS</h1>
                <div className="shopping_foot">
                    <span>122302</span>
                    <span className="up"><AiOutlineCaretUp /></span>
                    <span>1530</span>
                </div>
            </div>
            <div className="shopping_details ">
                <div className="icon color4">
                    <AiOutlineShopping />
                </div>
                <h1>TOTAL PRODUCTS</h1>
                <div className="shopping_foot">
                    <span>12302</span>
                    <span className="up"><AiOutlineCaretUp /></span>
                    <span>150</span>
                </div>
            </div>
        </section>
    )
}
export default Shopping