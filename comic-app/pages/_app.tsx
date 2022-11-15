import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';


export const add = (x, y) => x + y;



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
