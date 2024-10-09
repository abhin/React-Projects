import { useState } from 'react'

import Recipes from './pages/recipes'
import Comments from './pages/comments'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const nav = useNavigate();

  return (
    <>
      <div>
        <h1>Routing & Custom Hook</h1>
        <button style={{backgroundColor: "black", color:"white", margin: "5px"}} onClick={() => {nav('/recipes-list')}}>Recipies</button>
        <button style={{backgroundColor: "black", color:"white", margin: "5px"}} onClick={() => {nav('/comments')}}>Comments</button>

        <Routes>
          <Route path='/recipes-list' element={<Recipes />}/>
          <Route path='/comments' element={<Comments />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
