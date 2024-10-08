import Link from "next/link";

const Home = () => {
  const linksList = [
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/product",
      title: "Product",
    },
    {
      href: "/profile",
      title: "Profile"
    }, 
    {
      href: "/login",
      title: "Login"
    }, 
    {
      href: "/register",
      title: "Register"
    }
  ];
  return (
    <div>
      <h1>Welcome to Lesson 2 - Routing</h1>
      <ul className="flex justify-between">
        {linksList.map((link, id) => (
          <li key={id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
