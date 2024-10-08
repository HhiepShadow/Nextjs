## ROUTE HANDLERS  

- We can create custom request handlers for our routes using a feature called route handlers
- Unlike page routes, which respond with HTML content
&rarr; Route handlers allow to create RESTful endpoints, giving full control over the response  
- There is no overhead of having to create and configure a separate server  
- Route handlers are also great for making external API requests
- Route handlers run __server_side__, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser  

__Example__: We have a project structure
```
profile
|-  route.ts
|-  page.tsx
layout.tsx
page.tsx
```
&rarr; When we access to `/profile`, Nextjs will render `route.ts` API, not the `page.tsx`
    - Nextjs will prioritize the `route.ts` file, treating it as an API route. This means that if we have defined any URL endpoints in route.ts, the will be invoked when you hit that URL
    - The `page.tsx` file within the `profile` directory is meant to render a page component. However, it __will only be rendered__ if there's no API route `(route.ts)` at that path

### Handling GET Requests:
- Route Handlers is used to create API routes
- These are endpoints that we can use to handle HTTP Requests like GET, POST, PUT, DELETE in Nextjs
- Instead of creating API routes in `/api` directory , we can create route handlers directly inside any child directories of `src/app` to create API endpoints

- How to create GET Request from Server-side (Route Handlers GET):
__Step 1__: Create a `route.ts`

__Step 2__: Create and export a `GET` method
```ts
const products = [
    {
        id: 1,
        desc: 'Product 1'
    }, 
    {
        id: 2,
        desc: 'Product 2'
    }
]

export const GET = async () => {
    return new Response.json(products);
}
```

### Handling POST Requests:
How to create POST Request from Server-side (Route Handlers POST):
- Inside `route.ts`, create and export a `POST` method:

```ts
export const POST = async () => {
    const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
```

### Dynamic Route Handlers:
