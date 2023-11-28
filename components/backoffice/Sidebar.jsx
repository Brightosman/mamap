import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.jpg'
import Image from 'next/image'
import { ChevronRight, ExternalLink, LayoutGrid, LogOut, Slack, Tractor, Truck, User, User2, UserSquare2, Users2, Warehouse } from 'lucide-react'

export default function Sidebar() {
  const pathname = "string"
  const sidebarLinks = [
    
    {
      title:"Customers",
      icon:Users2,
      href:"/dashboard/customers"
    },
    {
      title:"Markets",
      icon:Warehouse,
      href:"/dashboard/markets"
    },
    {
      title:"Farmers",
      icon:UserSquare2,
      href:"/dashboard/farmers"
    },
    {
      title:"Orders",
      icon:Truck,
      href:"/dashboard/orders"
    },
    {
      title:"Our Staff",
      icon:User,
      href:"/dashboard/staff"
    },
    {
      title:"Settings",
      icon:LayoutGrid,
      href:"/dashboard/settings"
    },
    {
      title:"Online Store",
      icon:ExternalLink,
      href:"/"
    },
  ]
  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md">
        <Link className="px-6 py-4 " href="#">
          <Image src={logo} alt="Baba9JA logo" className="w-1/4" />
        </Link>
        <div className="space-y-3 flex flex-col mt-14 ">
            <Link href="/dashboard" 
              className={ 
                pathname === '/dashboard' ? 

                        "flex items-center space-x-3 px-6 py-2 border-l-4 border-x-green-600" :
                        "flex items-center space-x-3 px-6 py-2"}>
              <LayoutGrid />
              <span>Dashboard</span>
            </Link>

            <Link href="#" className="flex items-center space-x-3 px-6 py-2 border-l-4 border-x-green-600 ">
              <Slack />
              <span>Catalogue</span>
              <ChevronRight />
            </Link>

            {
              sidebarLinks.map((item, i) =>{
                const Icon = item.icon
                return(
                  <Link key={i} 
                    href={item.href} 
                    className={item.href==pathname? 
                      "flex items-center space-x-3 px-6 py-2 border-l-4 border-x-green-600 text-green-600" :
                      "flex items-center space-x-3 px-6 py-2"}>
                    <Icon />
                    <span>{item.title}</span>
                  </Link>
                )
              })
            }

            <div className="px-6 py-2">
              <button className="bg-lime-600 flex items-center space-x-3 px-6 py-3">
                <LogOut />
                <span>Logout</span>
              </button>
            </div>

        </div>
    </div>
  )
}
