import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Sets a request header so the root layout can omit site chrome (navbar/footer)
 * on Sanity Studio routes.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 */
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-sg-studio", "1");
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
