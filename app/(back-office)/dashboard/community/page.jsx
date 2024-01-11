import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const trainings = await getData("trainings")
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Our Community" href="/dashboard/community/new" linkTitle="Add Community"/>

      {/*Table Actions*/}
        <div className="py-8">
          <DataTable data={trainings} columns={columns} />
        </div>
    </div>
  )
}


