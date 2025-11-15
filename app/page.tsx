'use client'
import React from 'react'
import App from '../components/App'
import '../styles/global.css'
import Link from 'next/link'




export default function Page(){
  return (
    <html lang="en">
      <body>
        <div id="main-page">
          <App />
          <h1> </h1>
          <Link href="/fakeStore">Visit the Fake Store!</Link>
        </div>
      
      </body>
    </html>
  )
}