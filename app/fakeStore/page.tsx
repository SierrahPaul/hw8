'use client'
import React from 'react'
import '@/styles/global.css'
import SearchBar from '@/components/SearchBar/SearchBar'

export default function Page(){
  return (
    <html lang="en">
      <body>
        <h1>Welcome to the Fake Store!</h1>
        <div>
          <SearchBar />
        </div>
      </body>
    </html>
  )
}