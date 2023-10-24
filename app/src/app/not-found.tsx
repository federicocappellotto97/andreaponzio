import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "404 - Page not found",
}
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col pt-56 items-center gap-8 overflow-hidden">
      <p className="uppercase text-primary text-center font-medium text-[4rem] tracking-wide leading-none whitespace-nowrap">
        404 - Page not found
      </p>
      <Link href="/" className="text-primary underline text-[2rem]">
        Back to home
      </Link>
    </div>
  )
}
