import React, { useEffect, useState } from 'react'

import Context from './Context'
import { getAllCharacters } from '../api/business'

export default function ({ children }) {
  const [state, setState] = useState({
    pages: [...Array(100).keys()],
    results: [],
    page: 0
  })

  const [heroes, setHeroes] = useState([])

  const setResult = (results) => {
    setState({...state, results})
    //setState({...state, pages: [...Array((results.length-results.length%4)/4+(results.length%4==0?0:1)).keys()]})
  }

  const setPage = page => {
    setState({...state, page})
  }

  useEffect(()=>{
    console.log('o estado mudou: ', state.results.length)
  },[state])

  useEffect(()=>{
    console.log('heroes mudou: ', heroes.length)
  },[heroes])

  return (
    <Context.Provider
      value={{
        state,
        heroes,
        setHeroes,
        setResult,
        setPage
      }}
    >
      {children}
    </Context.Provider>
  )
}