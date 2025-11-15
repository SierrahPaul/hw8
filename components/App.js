'use client'
import React, { use } from 'react'
import Counter from './Counter'
import Paragrah from './Paragraph'

const App = () => {
  return (
            <div id="app">
                <h2>Counter</h2>
                <Counter incrementBy={1} buttonColor={'blue'}/>
                <Counter incrementBy={2} buttonColor={'purple'}/>
                <h2>About Our Project</h2>
                <Paragrah />
            </div>
  )
}

export default App