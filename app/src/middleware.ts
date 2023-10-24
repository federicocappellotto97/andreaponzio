import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  if (process.env.AUTH == "true") {
    const basicAuth = req.headers.get("authorization")
    const url = req.nextUrl

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1]
      const [user, pwd] = atob(authValue).split(":")

      const validUser = "giorgia"
      const validPassWord = "giorgia97"

      if (user === validUser && pwd === validPassWord) {
        return NextResponse.next()
      }
    }

    url.pathname = "/api/auth"

    return NextResponse.rewrite(url)
  } else {
    return NextResponse.next()
  }
}
