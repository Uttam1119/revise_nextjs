// this is also a method for routing with /api
// here the api folder doesn't have page.tsx but it is still routable.
// thats how it works.

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "this is from API route",
    status: "success",
  });
};
