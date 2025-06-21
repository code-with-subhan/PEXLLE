"use server"
import { signIn , signOut } from "@/Auth"

export const login = async () => {
    await signIn("github" , { redirectTo : "/DashBoard"})
}

export const logOut = async () => {
    await signOut({redirectTo : "/"})
}
