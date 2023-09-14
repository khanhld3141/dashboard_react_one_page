import React from 'react'
import './Orders.css'
import avatar from '../../assests/avatar.jpg'

const Order = () => {

    return (
        <section className='order'>
            <div className="order-detail">
                <h2>Recent Order</h2>
                <span>SEE ALL</span>
            </div>
            <div className="track">
                <table>
                    <tr>
                        <th>Tracking ID</th>
                        <th>Product Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>
                            <img src={avatar} alt="" />
                            <span>Apple Watch</span>
                        </td>
                        <td>
                            Sep 14, 2023
                        </td>
                        <td>$399</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>
                            <img src={avatar} alt="" />
                            <span>Apple Watch</span>
                        </td>
                        <td>
                            Sep 14, 2023
                        </td>
                        <td>$399</td>
                        <td>Complete</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}
export default Order