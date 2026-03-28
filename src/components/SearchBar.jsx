import React from 'react'

const SearchBar = ({ setQuery }) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    // This line fails if name="searchInput" is missing
    const value = e.target.elements.searchInput.value; 
    setQuery(value);
  };

  return (
      <div className="max-w-2xl mx-auto mb-10">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <input 
          name="searchInput"
          type="text"
          placeholder="Search for high-resolution photos..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-black/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-md shadow-2xl"
        />
      </form>
    </div>
  )
}

export default SearchBar