import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'

export default function page() {
  return (
    <div>
        <h2>Banners</h2>
        {/*
          image
          description
          url
        */}
        {/*Header*/}
        <PageHeader heading="Banners" href="/dashboard/banners/new" linkTitle="Add Banner"/>

        {/*Table Actions*/}
        {/* Export || Search || Bulk Delete */}
        <TableActions />
        <div className="py-8">
          <h2>Table</h2>
        </div>
    </div>
  )
}
