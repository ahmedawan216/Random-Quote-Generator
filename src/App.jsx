import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

const App = () => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");

  useEffect(() => {
    if (query.trim() === "") return;

    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=LuuuBT_EjGRepEPQlVgyxo60CTVkSifoRGjhyh1XXJc`)
    .then(res => res.json())
    .then(data => setImages(data.results || []))
    .catch(err => console.error("Fetch error:", err));
  }, [query])

  return (
    <div className='p-4'>
      <SearchBar setQuery={setQuery} />
      <ImageGrid images={images} />
    </div>
  )
}

export default App