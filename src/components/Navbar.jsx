import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div className="relative">
    {/* Glow Layer */}
    <div className="absolute inset-0  from-blue-600/40 via-blue-400/20 to-blue-600/40 blur-2xl opacity-80"></div>

    {/* Navbar */}
    <div className="relative flex justify-between items-center px-6 py-4
       from-[#0b1b3a]/90 via-[#102a5a]/80 to-[#0b1b3a]/90
      backdrop-blur-xl border border-white/10 rounded
      shadow-[0_10px_40px_rgba(0,90,255,0.35)]
    ">
      <Link
        to="/"
        className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_12px_rgba(0,140,255,0.7)]"
      >
        Media Search
      </Link>

      <div className="flex gap-3">
        <Link
          to="/"
          className="px-5 py-2 rounded-xl font-semibold text-white
          bg-white/10 border border-white/15
          shadow-[0_0_25px_rgba(0,120,255,0.35)]
          hover:bg-white/20 hover:shadow-[0_0_35px_rgba(0,140,255,0.7)]
          transition-all duration-300 active:scale-95"
        >
          Search
        </Link>

        <Link
          to="/collection"
          className="px-5 py-2 rounded-xl font-semibold text-white
          bg-blue-600/80 border border-blue-300/30
          shadow-[0_0_30px_rgba(0,140,255,0.6)]
          hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(0,140,255,0.9)]
          transition-all duration-300 active:scale-95"
        >
          Collection
        </Link>
      </div>
    </div>
  </div>
);

}

export default Navbar