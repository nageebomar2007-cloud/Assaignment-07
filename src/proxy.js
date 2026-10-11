import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

// Example of default export
export async function proxy(request) {
  // Proxy logic

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/profile" , "/detailsCard/:path*"],
};
