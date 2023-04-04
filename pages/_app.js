import NavBar2 from "../components/NavBar2";
//스타일파일은 다른 곳에서 임폴트가 안되나 글로벌 영역(_app.js)에서는 가능하다.
import '../styles/global.css'

export default function app ({Component, pageProps}) {
  return (
  <>
    <NavBar2 />
    {/* 아래 컴포넌트가 모든 라우터들을 연결하고 있음 */}
    {/* 리액트에서 root div 같은 것 */}
    <Component {...pageProps} />
    <style jsx global>{`
      span {
        color: white;
      }
      .a{
        text-decoration: none;
      }
    `}</style>
  </>
  )
};
