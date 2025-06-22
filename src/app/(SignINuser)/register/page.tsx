import { RegisterForm } from "@/components/Register/Register"
import React from "react"
export default function Register() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center bg-gradient-to-tr from-white-100 to-[#f69a9a] via-[#fae6e6] md:p-10 relative">
        <div className="w-full max-w-sm md:max-w-3xl relative z-4">
          <RegisterForm />
        </div>
        <div className="fixed right-0 bottom-0 gap-4 z-[-1] left-0 top-0 bg-red grid grid-cols-90 grid-rows-90 p-2 overflow-hidden">
          {[...Array(4000)].map(e => (
            <div className="h-[2px] w-[2px] rounded-full bg-[#b0b0b0] " key={e}></div>
          ))}
        </div>
      </div>
    </>
  )
}
