import { NextResponse } from 'next/server';

export async function middleware() {
  const response = NextResponse.next();

  const obj = { hello: "world" };
  console.log(obj instanceof Object); // <-- this prints "false" in new middleware

  return response;
}