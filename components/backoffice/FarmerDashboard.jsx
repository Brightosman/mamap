import React from "react";
import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashBoardCharts from '@/components/backoffice/DashBoardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'

export default function FarmerDashboard() {
  return (
    <div>
      <h2>Welcome Farmer</h2>
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
    </div>
  );
}
