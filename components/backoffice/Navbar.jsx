import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ProfilePicture from '../../public/default-image.png'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import Link from 'next/link'


export default function Navbar({setShowSidebar, showSidebar}) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 sm:pr-[20rem] ">
        <Link href={"/dashboard"} className='sm:hidden'>Baba9JA</Link>
        {/*  Icon */}
        <button onClick={() => setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500"> <AlignJustify /> </button>
        {/* 3 Icon */}
        <div className="flex space-x-3 text-green-600">
            <ThemeSwitcherBtn />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
                  <Bell className="text-lime-700 dark:text-lime-500"/>
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 -end-6 dark:border-gray-900">20</div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2 px-4 pr-8">
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem> 
                  <div className="flex items-center space-x-2"> 
                    <Image src={ProfilePicture} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full" /> 
                    <div className='flex flex-col space-y-1'>
                      <p>Yellow Sweet Corn Stock Out</p>
                      <div className='flex items-center space-x-2'>
                        <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Dec 12 2021 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div> 
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem> 
                  <div className="flex items-center space-x-2"> 
                    <Image src={ProfilePicture} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full" /> 
                    <div className='flex flex-col space-y-1'>
                      <p>Yellow Sweet Corn Stock Out</p>
                      <div className='flex items-center space-x-2'>
                        <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Dec 12 2021 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div> 
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem> 
                  <div className="flex items-center space-x-2"> 
                    <Image src={ProfilePicture} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full" /> 
                    <div className='flex flex-col space-y-1'>
                      <p>Yellow Sweet Corn Stock Out</p>
                      <div className='flex items-center space-x-2'>
                        <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Dec 12 2021 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div> 
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem> 
                  <div className="flex items-center space-x-2"> 
                    <Image src={ProfilePicture} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full" /> 
                    <div className='flex flex-col space-y-1'>
                      <p>Yellow Sweet Corn Stock Out</p>
                      <div className='flex items-center space-x-2'>
                        <p className='px-2 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                        <p>Dec 12 2021 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div> 
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                
              </DropdownMenuContent>
            </DropdownMenu>

            
            

            
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button> <Image src={ProfilePicture} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full" /> </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2 px-4 pr-8">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem> <button className='flex items-center space-x-2'> <LayoutDashboard className="mr-2 h-4 w-4" /> <span> Dashboard </span> </button> </DropdownMenuItem>
                <DropdownMenuItem> <button className='flex items-center space-x-2'>  <Settings className="mr-2 h-4 w-4" /> <span> Edit Profile </span> </button></DropdownMenuItem>
                <DropdownMenuItem> <button className='flex items-center space-x-2'> <LogOut className="mr-2 h-4 w-4" /> <span> Logout </span> </button> </DropdownMenuItem>
                <DropdownMenuItem> <User className="mr-2 h-4 w-4" /> <span> Subscription</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
  )
}
