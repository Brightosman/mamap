import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const farmers = await getData("farmers")
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Farmers" href="/dashboard/farmers/new" linkTitle="Add Farmer"/>

      {/*Table Actions*/}
      
        <div className="py-0">
          <DataTable data={farmers} columns={columns} filterKeys={["name"]} />
        </div>
    </div>
  )
}
