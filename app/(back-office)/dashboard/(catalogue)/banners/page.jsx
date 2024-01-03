import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from "@/components/data-table-components/DataTable";
import TableActions from '@/components/backoffice/TableActions'

import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function page() {
  const banners = await getData("banners");
  return (
    <div>
        <h2>Banners</h2>
        {/*Header*/}
        <PageHeader heading="Banners" href="/dashboard/banners/new" linkTitle="Add Banner"/>

        {/*Table Actions*/}
        <div className="py-8">
          <DataTable data={banners} columns={columns} />
        </div>
    </div>
  )
}
