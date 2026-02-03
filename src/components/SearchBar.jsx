import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState('')

  const dispatch=useDispatch()

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(setQuery(text))

    setText('')
    

  }
 return (
  <div className="relative px-6 mt-6">
    {/* Glow Background */}
    <div className="absolute inset-0  from-blue-600/30 via-blue-400/10 to-blue-600/30 blur-2xl opacity-80"></div>

    <form
      onSubmit={(e) => submitHandler(e)}
      className="relative flex items-center gap-4 p-5 rounded-2xl
      bg-white/10 backdrop-blur-xl border border-white/15
      shadow-[0_0_40px_rgba(0,140,255,0.25)]"
    >
      {/* Input */}
      <div className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
        bg-black/30 border border-white/10
        shadow-[0_0_25px_rgba(0,140,255,0.15)]"
      >
        {/* Search Icon */}
        <span className="text-blue-300 text-xl">🔍</span>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full bg-transparent text-white placeholder:text-gray-300
          outline-none text-lg"
          type="text"
          placeholder="Search photos, videos, gifs..."
        />
      </div>

      {/* Button */}
      <button
        className="px-6 py-3 rounded-xl font-semibold text-white
        bg-blue-600/90 border border-blue-300/30
        shadow-[0_0_35px_rgba(0,140,255,0.6)]
        hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(0,140,255,0.9)]
        transition-all duration-300 active:scale-95"
      >
        Search
      </button>
    </form>
  </div>
);

}

export default SearchBar