import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
})
console.log("GITHUB_ID:", process.env.GITHUB_ID)
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET)