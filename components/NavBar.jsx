import Link from "next/link"
import { useRouter } from "next/router"
import styles from './NavBar.module.css'

//.module.css 사용법

//NextJS에서는 Link가 a태그와 똑같음
export default function NavBar() {

  const router = useRouter();
  console.log(router);

  return (
  <nav >
    <Link className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`} href="/">
     home
    </Link>
    <Link className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`} href="/about">
      About
    </Link>
  </nav>
  )
};
