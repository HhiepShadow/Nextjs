## LESSON 2 - ROUTING

- Nextjs has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase

### Routing Conventions:
- All routes must be placed inside the `src/app` folder
- Every file that corresponds to a route must be named `page.js` or `page.tsx`
- Every folder corresponds to a path segment in the browser URL

Example:
- __Scenario 1__:
    - [localhost:3000/]() : Home Page
- __Scenario 2__:
    - [localhost:3000/about]() : About Page  
    - [localhost:3000/profile]() : Profile Page
- __Scenario 3__: When we access to Not Found URL:
    - [localhost:3000/dashboard]() : 404 Not Found Page


### Nested Routing:
- __Scenario 4__: 
    - [localhost:3000/blog]() : Blog Page
    - [localhost:3000/blog/first]() : First Blog Page
    - [localhost:3000/blog/second]() : Second Blog Page

```
app/
├── blog        
|    └── page.tsx
|    └── first
|        └── page.tsx
|    └── second
|        └── page.tsx
```

### Dynamic Routes:
- __Scenario 5__:
    - [localhost:3000/products]() : Products List Page
    - [localhost:3000/products/[id]]() : Product Detail Page

```
app/
├── products        
|    └── page.tsx
|    └── [productId]
|        └── page.tsx
```

### Nested Dynamic Routes:
- __Scenario 6__:
    - [localhost:3000/products/1]() : Product 1 Details Page
    - [localhost:3000/products/1/reviews/1]() : Review 1 for Product 1

```
app/
├── products        
|    └── page.tsx
|    └── [productId]
|        └── page.tsx
|        └── reviews
|            └── [reviewId]
|                └── page.tsx 
```

### Catch-all Segments:
- __Scenario 7__:
    - localhost:3000/docs/feature1/concept1 : Docs for F1 C1
     
```     
    | Feature 1
    |   Concept 1
    |   Concept 2
    |   Concept 3
    |   Concept 4 
    | Feature 2
    | Feature 3
    | Feature 4
```

- Suppose, we have 20 features and for each feature we have 20 concepts  
&rarr; At that time, we have to create 20*20 = 400 routes 
&rarr; We will use `Catch-all Segments` to create dynamic routes that capture every part of the URL after a specific point

- __Syntax__: Use 3 dots ... for the name of the file or folder to indicate `Catch-all segments`

```
app/
├── docs        
|    └── page.tsx
|    └── [...slug]
|        └── page.tsx
```

### Not Found 404 Page:
- In `Next.js`, we can create __404-Not Found__ page to display when users visit URLs that do not exist in the application
- To create a custom 404 page, we just have to create file `not-found.js` or `not-found.tsx` inside a route folder

```ts
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found - 404</h2>
      <p>Could not find requested resource</p>
    </div>
  );
};

export default NotFound;
```

### File Colocation:

### Private Folders:
- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing
- __Syntax__: Prefix the folder name with an underscore  

    Ex: `_lib` folder will not be accessible even if there is a `page.tsx` file  
&rarr; [localhost:3000/_lib]() will return a 404-NotFound page

### Route Groups:
- In the `app` directory, nested folders are normally mapped to URL paths
- However, we can mark a folder as a `Route Group` to prevent the folder from being included in the route's URL path
- Allows us to logically group our groups and project files without affecting the URL path structure
- For example, we will implement authentication routes:  
    - Register
    - Login
    - Forgot password

- __Syntax__: A route group can be created by wrapping a folder's name in parenthesis ():  
`(folderName)`

```
app/
├── (auth)        
|    └── login
|        └── page.tsx
|    └── register
|        └── page.tsx
|    └── forgot-password
|        └── page.tsx
```

### Layouts:
- A page is UI that is unique to a route
- A layout is UI that is shared between multiple pages in the application
- How to create Layouts:
    - Define a layout by default exporting a React component from a `layout.js` or `layout.tsx` file
    - That component should accept a `children` prop that will be populated with a child page during rendering 

### Nested Layouts:
- 