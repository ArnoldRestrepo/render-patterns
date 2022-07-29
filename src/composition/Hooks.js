import { useEffect, useState } from 'react'

const useFetchApi = (url) => { 
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }
  useEffect(() => { 
    fetchData(url)
  }, [url])

  return { data, loading, error }
}

function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <div className='DogsGrid__item'>
      <img src={dog} alt="Dog" key={index}/>
    </div>
  ));
}

const Hooks = () => {
  const { data, loading, error } = useFetchApi("https://dog.ceo/api/breeds/image/random/50")

  return (
    <section className='HOC'>
      <h2>🐾 Dogs Grid 🐾</h2>
      <p>Flickr &gt; Instagram</p>
      <section className='DogsGrid'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <DogImages data={data}/>}
      </section>
    </section>
  )
}

export default Hooks;