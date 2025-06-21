'use client';
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { useTheme } from "next-themes"

const Theme = () => {
    const { setTheme } = useTheme()

    return (
        <div className='flex cursor-pointer hover:bg-accent-foreground p-1 px-2'>
            <Sun className="w-4 text-muted-foreground hidden dark:block" onClick={() => setTheme("light")} />
            <Moon className='w-4 text-muted-foreground block dark:hidden' onClick={() => setTheme("dark")}/>
        </div>
    )
}

export default Theme
