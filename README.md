This repo reproduces issue [vercel/next.js#38184]:


The instanceof operator doesn't work in the new released middleware.

```
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const obj = { hello: "world" };
  console.log(obj instanceof Object); // <-- this prints "false" in new middleware

  return response;
}
```