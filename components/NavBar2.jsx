import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar2() {

  const router = useRouter();

  return (
  <nav >
    <Link href="/">
     <span className={router.pathname === '/' ? "active" : ""}>home</span>
    </Link>
    <Link href="/about">
      <span >About</span>
    </Link>
    <style jsx>{`
    nav {
      background-color: tomato;
    }

    .active {
      color: yellow;
    }

    .no_deco {
      text-decoration: none;
    }
    `}</style>
  </nav>
  )
};
