import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from "@/components/data-table-components/DataTable";

import React from 'react'
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function page() {
  const categories = await getData("categories");
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Categories" href="/dashboard/categories/new" linkTitle="Add Category"/>

      {/*Table Actions*/}
        <div className="py-8">
          <h2>Table</h2>
          <DataTable data={categories} columns={columns} />
        </div>
    </div>
  )
}

