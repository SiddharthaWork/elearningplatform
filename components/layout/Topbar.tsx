"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import path from 'path'
import { useAuth, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
const Topbar = () => {
    const { isSignedIn } = useAuth();
    const topRoutes = [
        { label: "Instructor", path: "/instructor/courses" },
        { label: "Learning", path: "/learning" },
    ]
    return (
        <div className='flex justify-between items-center p-4'>
            <Link href={"/"}>
                <Image src="/logo.png" alt="logo" width={200} height={100} />
            </Link>

            <div className="max-md:hidden w-[400px] rounded-full flex">
                <input
                    className='flex-grow bg-[#fff8eb] rounded-l-full border-none outline-none text-sm pl-4 py-3'
                    placeholder='Search for courses'

                />
                <button className='bg-[#fdab04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#fdab04]/70 [box-shadow]'>
                    <Search className='w-4 h-4' />

                </button>
            </div>
            <div className='flex gap-6 items-center'>
                <div className="max-sm:hidden flex gap-6">
                    {topRoutes.map((route, index) => (
                        <Link key={route.path}
                            href={route.path}
                            className="text-sm font-semibold hover:text-[#fdab04]">
                            {route.label}
                        </Link>
                    ))}
                </div>
                {isSignedIn ? ( 
                <UserButton afterSignOutUrl="/sign-in" />
                 ) : (
                    <Link href="/sign-in">
                      <Button>Sign In</Button>
                    </Link>
                 )}
            </div>
        </div>
    )
}

export default Topbar;