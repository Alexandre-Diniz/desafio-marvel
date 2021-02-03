import api from './index'
import {
  HASH,
  PRIVATE_KEY,
  time_stamp,
  PUBLIC_KEY
} from './keys'

const getAllCharacters = async () => {
  try {
    const response = await api.get('/characters',
    {
      params:{
        apikey:PUBLIC_KEY,
        ts: time_stamp,
        hash: HASH
      }
    })
    return response.data.data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

const getAllCharactersByNameStartsWith = async ( nameStartsWith, page, resolve ) => {
  try {
    const response = await api.get('/characters',
    {
      params:{
        apikey:PUBLIC_KEY,
        ts: time_stamp,
        hash: HASH,
        nameStartsWith,
        limit:4,
        offset: page
      }
    })
    console.log('aqui')
    resolve(response.data.data.results)
  } catch (error) {
    console.log(error)
    //resolve([])
  }
}

export {
  getAllCharacters,
  getAllCharactersByNameStartsWith
}