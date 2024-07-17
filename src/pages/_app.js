import '../app/globals.css'

import localFont from 'next/font/local'



const myFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/webfonts/fa-brands-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/webfonts/fa-solid-900.woff2',
      weight: '400',
      style: 'italic',
    }
   
  ],
})


 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return  (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}