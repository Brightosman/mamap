import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashBoardCharts from '@/components/backoffice/DashBoardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div>
        <Heading title="Dashboard Overview" />
        {/* Large Cards */}
        <LargeCards />
        {/* Small Cards */}
        <SmallCards />
        {/* Charts */}
        <DashBoardCharts />
        {/* Recent Orders Table */}
        <CustomDataTable />
    </div>
  )
}
