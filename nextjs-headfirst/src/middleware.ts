// [VMLayer] src/middleware.ts - nextjs's special file
import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest & { session: any }) => {
  const response = NextResponse.next();
  req.session = { user: { id: 1 } };
  return response;
};
const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|static|favicon.ico).*)",
  ],
};
export { middleware, config };
