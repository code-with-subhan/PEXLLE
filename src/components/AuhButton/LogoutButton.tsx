"use client"
import React from 'react'
import { Button } from '../ui/button';
import { logOut } from '@/lib/actions/auth';

const LogOutButton = () => {
    return (
        <div>
            <Button variant="ghost" className="rounded-none cursor-pointer hover:bg-transparent" size='sm' onClick={() => logOut()}>Log Out</Button>
        </div>
    )
}

export default LogOutButton
