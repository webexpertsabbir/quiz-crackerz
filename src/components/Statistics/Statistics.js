import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const chartData = useLoaderData();
    
    const newCartData = chartData.data;
    // console.log(newCartData)
    return (
        <div>
            <div>
                <div>
                    <h2 className='text-center text-2xl'>Chart</h2>
                </div>
                <LineChart width={500} height={500} data={newCartData}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            </div>
            
        </div>
    );
};

export default Statistics;