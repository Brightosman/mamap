import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashBoardCharts from '@/components/backoffice/DashBoardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'
import FarmerDashboard from "@/components/backoffice/FarmerDashboard";
import UserDashboard from "@/components/backoffice/UserDashboard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "FARMER") {
    return <FarmerDashboard />;
  }
  else
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
