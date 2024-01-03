import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const markets = await getData("markets");
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Markets" href="/dashboard/markets/new" linkTitle="Add Market"/>

      {/*Table Actions*/}
      
        <div className="py-8">
          <DataTable data={markets} columns={columns} />
        </div>
    </div>
  )
}
