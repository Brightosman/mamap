import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import { Search, Trash2 } from 'lucide-react'

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div >
      {/*Header*/}
      <PageHeader heading="Categories" href="/dashboard/categories/new" linkTitle="Add Category"/>
      {/*Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      <div className="flex justify-between py-4 px-8 bg-slate-700 rounded-lg items-center gap-8">
        <button> Export </button>

        {/* Search */}

        <div className="flex-grow ">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input 
                  type="text" 
                  id="table-search" 
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4" 
                  placeholder="Search for items" />
            </div>
        </div>


        {/* Delete */}
        <button>
          <Trash2 />
        </button>
      </div>
        <h2>Categories</h2>
    </div>
  )
}
