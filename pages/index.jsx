import { useState, useEffect } from "react"
import Seo from "../components/Seo";

//Next.js는 React.js를 백엔드에서 동작시켜서 페이지를 미리 랜더링함
//그렇게 생성이된 HTML을 Next.js가 JS와 React.js가 로딩되지 않았음에도 미리 그려줌
//그래서 JS의 로딩이 느려도 HTML이 Next를통해 그려지기 때문에 일단 유저는 UI를 보게 됨.
//그리고 JS작동을 멈추면, Next가 그려준 HTML의 UI는 유저에게 보이나,
//아래와 같이 React.js의 기능인 useState가 작동하지 않아 버튼이 활성화 되지 않음.
//이것이 SSR(Server-Side-Rendering)
export default function Home({results}) {
  return (
    <div>
      <Seo title={"Home"} />
      {/* 데이터가 존재하지 않을 때 로딩 중 이라는 표시 나타내기 */}
      {!results && <h4>Loading...</h4>}
      {
        results?.map(el =>
        <div key={el.id}>
          <h4>{el.original_title}</h4>
        </div>)
      }
    </div>
  )
}

//오직 백엔드에서만 작동하는 영역
//함수명을 뺴먹지 않고 똑같이 적어줘야한다. getServerSideProps
//객체형태로 리턴해주고, 이것을 위에 Home이 props로 받는다.
//그 후에 구조분해할당을 하던, props.을 이용하던 프론트 단에서 데이터를 사용하면 된다.
export async function getServerSideProps() {
  const API_KEY = "ebb5950759cebf73ef7710cb9b73f4c4";
  const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
  return {
    props: {
      results,
    }
  }
}
