import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStats = [
        {
            period:"Today Orders",
            sales:"130,004.05",
            color:"bg-green-600"
        },
        {
            period:"Yesterday Orders",
            sales:"110,070.35",
            color:"bg-blue-600"
        },
        {
            period:"This Month Orders",
            sales:"9,110,000.21",
            color:"bg-orange-600"
        },
        {
            period:"Last Month Orders",
            sales:"9,230,000.53",
            color:"bg-red-600"
        },
        {
            period:"All Time Sales",
            sales:"59,130,000.06",
            color:"bg-purple-600"
        },
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        {
            orderStats.map((item, i) =>{
                return (
                    <LargeCard className="bg-green-600" data={item} key={i} />
                )
            })
        }
    </div>
  )
}
