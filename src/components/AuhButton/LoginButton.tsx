"use client"
import React from 'react'
import { login } from "@/lib/actions/auth";
import { Button } from '../ui/button';

const LoginButton = () => {
    return (
        <div>
            <Button variant="ghost" className="rounded-none cursor-pointer hover:bg-transparent" size='sm' onClick={() => login()}>Log In</Button>
        </div>
    )
}

export default LoginButton
