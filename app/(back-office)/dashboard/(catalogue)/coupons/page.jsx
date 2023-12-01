import React from 'react'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'

export default function Coupons() {
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Coupons" href="/dashboard/coupons/new" linkTitle="Add Coupons"/>

      {/*Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
        <div className="py-8">
          <h2>Table</h2>
        </div>
    </div>
  )
}
