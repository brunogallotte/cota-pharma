import { NextRequest, NextResponse, userAgent } from "next/server";

export default async function middleware(req: NextRequest) {
    try {
       const response = NextResponse.next();
        setResponseHeaders(req, response);
    
        return response;
      } catch (err) {
        return handleError(req, req.nextUrl.pathname);
      }
}

/* ------------------ Set response headers with request information ------------------ */
function setResponseHeaders(req: NextRequest, response: NextResponse) {
    const host = req.headers.get("host");
    const protocol = req.headers.get("x-forwarded-proto") || "http";
    const currentUrl = `${protocol}://${host}${req.nextUrl.pathname}${req.nextUrl.search}`;
  
    response.headers.set("x-url", currentUrl);
    response.headers.set("x-queries", req.nextUrl.searchParams.toString());
    response.headers.set("x-page", req.nextUrl.pathname.split("/").pop() || "");
    response.headers.set("x-pathname", req.nextUrl.pathname);
  
    const { device, browser } = userAgent(req);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    response.headers.set("x-device", viewport);
    response.headers.set("x-user-agent", browser.name ? `${browser.name} ${browser.version}` : "no user-agent detected");
  
    return currentUrl;
}

function handleError(req: NextRequest, pathname: string) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, req.url));
}

