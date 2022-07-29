import { useEffect, useState } from 'react'

// HOC example with API
function withLoader(Component, url) { 
  return (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }
      getData();
    }, []);
    if (!data) return <div>Loading...</div>;
    return <Component {...props} data={data} />;
  }
}

function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <div className='DogsGrid__item'>
      <img src={dog} alt="Dog" key={index}/>
    </div>
  ));
}
const Dogs = withLoader(DogImages, 'https://dog.ceo/api/breeds/image/random/50')

const HOC = () => {
  return (
    <section className='HOC'>
      <h2>🐾 Dogs Grid 🐾</h2>
      <p>Flickr &gt; Instagram</p>
      <section className='DogsGrid'>
        <Dogs/>
      </section>
    </section>
  )
}

export default HOC;