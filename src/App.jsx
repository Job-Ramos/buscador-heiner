import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import ImageCard from './components/ImageCard'

function App() {

  const [inputValue, setInputValue] = useState('')

  const apiKey = '39164388-c88bb443add71eabe61c238cb'
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}`
  const [ images, getImages, hasError, isLoading ] = useFetch(url)

  useEffect(() => {
    getImages()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  console.log(images)

  return (
    <div className='container_imgs'>
      <form className='container_form' onSubmit={handleSubmit} >
        <input className='buscador' ref={inputSearch} type="text" placeholder='B     u     s     c     a     r'/>
        <button className='container_button' >Search</button>
      </form>
      <div className='imagenes'>
        {
          isLoading
            ? <h2>loading...</h2>
            : (
              hasError || images?.hits.length === 0
                ? <h2>❌ Error: not found 404 😭</h2>
                : (
                  images?.hits.map(imageInfo => (
                    <ImageCard 
                      key={imageInfo.id} 
                      imageInfo={imageInfo}
                    />
                  ))
                )
            )
        }
      </div>
    </div>
  )
}

export default App

