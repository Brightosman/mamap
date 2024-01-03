import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { columns } from "./columns";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

export default async function Coupons() {
  const coupons = await getData("coupons")
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Coupons" href="/dashboard/coupons/new" linkTitle="Add Coupons"/>

      {/*Table Actions*/}
      
        <div className="py-8">
          <DataTable data={coupons} columns={columns} />
        </div>
    </div>
  )
}
