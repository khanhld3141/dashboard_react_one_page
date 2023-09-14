import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'

import './Analytic.css'
const data = [
    { data: 4500 },
    {
        data: 5000,
    },
    {
        data: 4700,
    },
    {
        data: 4400,
    },
    {
        data: 4800,
    },
    {
        data: 5300,
    },
    {
        data: 5800,
    },
    {
        data: 6000,
    },
    {
        data: 6300,
    },
    {
        data: 6580,
    },
    {
        data: 6780,
    },
    {
        data: 6680,
    },
    {
        data: 6500,
    },
    {
        data: 6300,
    },
    {
        data: 5900,
    },
    {
        data: 5700,
    },
    {
        data: 5500,
    },
    {
        data: 5300,
    },
    {
        data: 5100,
    },
    {
        data: 5090,
    },
    {
        data: 5300,
    },
    {
        data: 5800,
    },
    {
        data: 6000,
    },
    {
        data: 6300,
    },
    {
        data: 6780,
    },
    {
        data: 6500,
    },
    {
        data: 6300,
    },
    {
        data: 6500,
    },
    {
        data: 6700,
    },
    {
        data: 7000,
    },
    {
        data: 7300,
    },
    {
        data: 7500,
    },
    {
        data: 7700,
    },
    {
        data: 8090,
    },
    {
        data: 8190,
    },
    {
        data: 7990,
    },

    {
        data: 7700,
    },
    {
        data: 7500,
    },
    {
        data: 7300,
    },
    {
        data: 7000,
    },
    {
        data: 6700,
    },
    {
        data: 6500,
    },
    {
        data: 6300,
    },
    {
        data: 6500,
    },
    {
        data: 6780,
    },
    {
        data: 6300,
    },
    {
        data: 6000,
    },
    {
        data: 5800,
    },

    {
        data: 5490,
    },
    {
        data: 6000,
    },
    {
        data: 8000,
    },
];
const Analytic = () => {

    return (
        <section className='analytic'>
            <div className="analytic_detail">
                <div className=" text">
                    <h2>Sales Analytic</h2>
                </div>
                <button>
                    Switch to Weekly
                </button>
            </div>
            <div className="analytic_graph">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500}
                        height={400}
                        data={data}
                        margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
                    >
                        <Tooltip cursor={false} />
                        <Area type="monotone" dataKey="data"
                            animationBegin={800}
                            animationDuration={2000}
                            stroke='#ffc107'
                            fill='#ffeaa7'
                            strokeWidth={4}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>

    )
}
export default Analytic