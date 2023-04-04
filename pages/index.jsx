import { useState } from "react/cjs/react.development"
import Seo from "../components/Seo";

//Next.js는 React.js를 백엔드에서 동작시켜서 페이지를 미리 랜더링함
//그렇게 생성이된 HTML을 Next.js가 JS와 React.js가 로딩되지 않았음에도 미리 그려줌
//그래서 JS의 로딩이 느려도 HTML이 Next를통해 그려지기 때문에 일단 유저는 UI를 보게 됨.
//그리고 JS작동을 멈추면, Next가 그려준 HTML의 UI는 유저에게 보이나,
//아래와 같이 React.js의 기능인 useState가 작동하지 않아 버튼이 활성화 되지 않음.
//이것이 SSR(Server-Side-Rendering)
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title={"Home"} />
      <h1>Hello {counter}</h1>
      <button onClick={()=> setCounter((cur)=> cur + 1)}>+</button>
    </div>
  )
}
