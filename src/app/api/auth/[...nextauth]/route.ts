import { handlers } from "@/Auth";

export const { GET, POST } = handlers
console.log("GITHUB_ID:", process.env.GITHUB_ID)
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET)