import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar2() {

  //style jsx적용법

  const router = useRouter();

  return (
  <nav >
    <Link className={"a"} href="/">
     <span className={router.pathname === '/' ? "active" : ""}>home</span>
    </Link>
    <Link className={"a"} href="/about">
      <span className={router.pathname === '/about' ? "active" : ""} >About</span>
    </Link>

    {/* style jsx 적용방법 */}
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
