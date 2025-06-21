import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Theme from "../Home/Theme";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-3 sm:w-[430px] m-auto ", className)}
      {...props}
    >
      <form className="p-6 md:p-8 md:py-2 ">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col items-center text-center mb-4">
            <img
              src="https://pexlledn.vercel.app/_next/image?url=%2Fpexlleh.png&w=256&q=75"
              width="150px"
              alt=""
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Full</Label>
            <Input
              id="email"
              type="email"
              placeholder="Subhan Hassan"
              className="bg-white shadow-none rounded-none active:border-[#f36161] border-none outline-none"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="bg-white shadow-none rounded-none active:border-[#f36161] border-none outline-none"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              placeholder="Your password"
              className="bg-white shadow-none rounded-none active:border-[#f36161] border-none outline-none"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              placeholder="Your password"
              className="bg-white shadow-none rounded-none active:border-[#f36161] border-none outline-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#F05454] hover:bg-[#F05445] rounded-none"
          > Create Account</Button>
          <div className="text-center text-sm">
          Already have an account? &ensp;&ensp;
            <Link href="/signin" className="underline-none hover:underline-offset-4 font-semibold hover:underline text-[#F05454]" >Log in</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center sm:w-2/3 m-auto">
            <Button variant="outline" className="w-full rounded-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span className="">Google</span>
            </Button>
            <Button variant="outline" className="w-full rounded-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  fill="currentColor"
                />
              </svg>
              <span className="">Apple</span>
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center mt-5  items-center">
          <Theme/>
        </div>
      </form>
    </div>
  );
}
