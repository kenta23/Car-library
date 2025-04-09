'use client';

import { cardStyle } from '@/lib/styles';
import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


export default function Sales() {
  return (
    <div className="flex flex-row items-start gap-10 mt-10">
      <div className="flex flex-col items-start justify-start w-auto h-full px-4 py-3 rounded-lg gap-7 bg-white/15">
        <div className="space-y-3">
          <h1 className="text-lg">Annual Sales Total</h1>
          <p className="text-2xl font-medium">$24000</p>
        </div>
        <ResponsiveContainer width={800} height={400}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />
            <Area type="linear" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/**Places with the most rents  */}

      <div className="w-auto h-auto px-4 py-3 rounded-lg gap-7 bg-white/15">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg text-center">Places with the most car rents</h1>

          <div className="w-full">
            <BarChart width={400} height={430} data={toprentsData}>
              <XAxis dataKey="name" />
              <Bar dataKey="uv" label={{  position: 'center', color: '#fffff' }} fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

const toprentsData = [
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
      },
      {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
      },
      {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
]


