import Link from "next/link";
import { title } from "process";

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
