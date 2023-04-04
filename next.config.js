/** @type {import('next').NextConfig} */

const API_KEY = "ebb5950759cebf73ef7710cb9b73f4c4";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  //리액트 스트릭트모드
  // reactStrictMode: false,
  //API키 숨기는 설정(.env로도 가능)
  async redirects(){
    return [
      {
        //redirect(특정 주소로 오면 다른 주소로 보내는 것 /old-blog/:path 이렇게 파람스도 가능)
        //소스에 뭐라고 치면
        source: "/contact",
        //이곳으로 보낸다. (*를 뒤에 붙이면 아무렇게나 쳐도 destination으로 이동한다.)
        destination: "/form",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/moives",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
