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
- Nested layouts is a powerful feature in Nextjs allows us to organize layouts in a nested structure to create reusable interface sections for different areas of your website application
- It is especially useful when you have multiple parts of your app that use different layouts, but still need to share certain elements like the header or the footer
- Definition:
    - Nested layout allows us to nest many layouts in an application  
    Ex: We can create a overall layout for the entire application and another layout for a specific area, such as dashboard or user page  
    - Each nested layout will provide structure for its group of child pages, while still inheriting from the root or parent layout  
- Example:
Suppose you have an application with an overall layout and within that there is a seperate layout for the dashboard pages  
__Step 1__: Create RootLayout includes components like header, footer and main sections of page
```tsx
import React from 'react'

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
```

__Step 2__: Create Layout for Dashboard  
- Dashboard layout will have additional __navigation__ for management pages, but still within the overall layout
```tsx
import MainLayout from '../layout';

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <MainLayout>
            <Navigation />
            <div>
                {children}
            </div>
        </MainLayout>
    )
}
```

__Step 3__: Create Nested Layout in Subpages
- In Dashboard, Subpages like `Setting` or `Users` will be displayed in DashboardLayout
```tsx
import DashboardLayout from '../layout';

const SettingPage = () => {
    return (
        <DashboardLayout>
            <h2>Setting</h2>
            <p>Setting page</p>
        </DashboardLayout>
    )
}
```

### Routing Metadata:
- Ensuring proper __Search Engine Optimization__ (__SEO__), is crucial for increasing visibilit and attracting users
- Next.js introduced the Metadata API which allows to define metadata for each page
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed
- Metadata in Next.js can be managed directly in `layout.tsx` or `page.tsx`
&rarr; Mahes metadata management more flexible and organizd, especially with the ability to create Dynamic Routing  
Ex: We can add metadata into our pages by using `metadata` object in `page.tsx`:  

```tsx
export const metadata = {
    title: 'My Next.js Application',
    description: 'This is a sample Next.js application'
};

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Next.js Application</h1>
        </div>
    );
}
```

- Some common Metadata properties:  

| Property     | Definition                                                                                      |
|--------------|-------------------------------------------------------------------------------------------------|
| `title`      | The title of the page.                                                                          |
| `description`| A short description of the page, typically used for SEO.                                         |
| `keywords`   | Keywords relevant to the page.                                                                  |
| `openGraph`  | Information shared on social media platforms like Facebook and Twitter.                         |
| `robots`     | Controls how search engines handle the page (e.g., index, noindex, follow, nofollow).            |
| `icons`      | Links to icons like the favicon.

Ex:  
```tsx
export const metadata = {
    title: 'Product Page - My Next.js App',
  description: 'Detailed product information',
  keywords: ['product', 'details', 'nextjs'],
  openGraph: {
    title: 'Product Page',
    description: 'Check out this amazing product',
    images: [
      {
        url: 'https://example.com/product.jpg',
        width: 800,
        height: 600,
        alt: 'Product Image',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}
```

- There are 2 ways to configure metadata:  
(1) Export a static metadata object

(2) Export a dynamic `generateMetadata()` function

### Navigation:
- File based routing
- We manually entered the URLs in the browser's address bar to navigate to the different routes
- Users rely on UI elements like links to navigate:
    - Clicking on them or
    - Through programmatic navigation after completion an action 

- __Link Component Navigation__: to enable client side navigation Next.js provides us with the `<Link>` component
    - The `<Link>` component is a React component that extends the `<a>` element, and it's the primary way to navigate between routes in Next.js  
&rarr; To use it, we need to import it from __"next/link"__  

| Property    | Description                                                                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `href`      | The URL or path to navigate to. It can be a string or an object (including pathname and query).                                                           |
| `as`        | The displayed path different from the `href`. Commonly used when you need to show a different URL than the one being navigated to.                        |
| `replace`   | If `true`, navigation will replace the current history entry instead of adding a new one. Useful when you don't want users to go back to the previous page.|
| `scroll`    | If `true`, the page will scroll to the top after navigation. Defaults to `true`, but can be disabled if you want to preserve the scroll position.         |
| `shallow`   | Navigate without running `getStaticProps`, `getServerSideProps`, or `getInitialProps` again. It preserves the data already fetched for the page.          |
| `prefetch`  | Automatically prefetches the page when the link is in the viewport. Defaults to `true`, but can be disabled by setting it to `false`.                     |
| `locale`    | Specifies the locale (language) for the route if using internationalization (i18n).                                                                      |
| `target`    | Similar to the `target` attribute of an `<a>` tag, used to open the link in a new window or tab (e.g., `_blank`).                                         |
| `rel`       | Used along with `target="_blank"` for security reasons, commonly set to `rel="noopener noreferrer"`.                                                     |
| `passHref`  | When `true`, the `href` attribute will be passed down to the child if it's an `<a>` element. Useful for custom link components.                           |
| `onClick`   | A callback function triggered when the link is clicked.


### Loading file:
- __loading.tsx__ is a special file used to create a Loading component displayed while data and page are being loaded
- This component will automically display when Next.js detects that a page is waiting to load data  
Ex:
```tsx
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="spinner-container"></div>
            <p>Loading data, please wait...</p>
        </div>
    )
}

export default Loading;
```

### Error file:
- Another special file in Next.js is __error.tsx__
- Used to create a component that handles default error when the page or data encounters errors during rendering
- Automically wrap a route segment and its nested children in a React Error Boundary
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
- Isolate errors to affected segments while keeping the rest of the application functional  

```tsx
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<NotFound />}>
                    <Page />
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```

### Parallel Routes:
- Allows to display multiple parallel routes in the same layout without having to nest them  
&rarr; Useful when we want to display parts of the application with independent content at the same time, for example, a sidebar and main content
- Parallel routes are defined using a feature known as slots
- Slots help structure our content in a modular fashion
- To define a slot, we use the __@folder__ naming convention
- Each slot is then passed as a prop to its corresponding `layout.tsx` file

### Unmatched Routes:
- Navigation from the UI:
    - In the case of navigation within the UI, Nextjs retains the previous active state of a slot regardless of changes in the URL
- Page reload:
    - Nextjs immediately searches for a `default.tsx` file within each unmatched slot
    - If this `default.tsx` is missing in any of the unmatched slots of the current route, Nextjs will render a 404 error page

- `default.tsx`:
    - Serves as a fallback to render content when the framework cannot retrive a slot's active state from the current URL
    - You have complete freedom to define the UI for unmatched routes: You can either mirror the content found in `page.tsx` or craft an entirely custom view 

### Conditional Routes:

### Intercepting Routes:
- Allows to load a route from another part of the application within the current layout
- Useful when we want to display the content of a route without the user switching to a different context  
__Example__: When clicking on a photo in a feed, we can display the photo in a modal, overlaying the feed  
&rarr; In this case, Nextjs intercepts the `/photo/123` route, masks the URL, and overlays it over `/feed`

- However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal
&rarr; No route interception should occur 

- __Convention__: Intercepting routes can be defined with the `(..)` convention, which is similar to relative path convention `../` but for segments
    - We can use:
        - `(.)` to match segments on the __same level__
        - `(..)` to match segments __1 level above__
        - `(..)(..)` to match segments __2 levels above__
        - (...) to match segments from the __root__ `app/src` directory  
__Example__: We can intercept the `photo` segment from within the `feed` segment by creating a `(..)photo` directory

```
feed
|-  layout.tsx
|-   (..)photo
|--     [id]
|---      page.tsx
photo
|-   [id]
|--      page.tsx
layout.tsx
page.tsx
```

#### Modals:
- Intercepting Routes can be used together with `Parallel Routes` to create modals
- Allows to solve common challenges when building modals, such as:
    - Making the modal context __shareable through a URL__
    - __Preserving context__ when the page is refreshed, instead of closing the modal
    - __Closing the modal on backwards navigation__ rather than going to the previous route
    - __Reopening the modal on fowards navigation__