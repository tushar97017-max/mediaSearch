import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs=['photos','videos','gif']

    const dispatch=useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)

 return (
  <div className="flex gap-5 p-10">
    {tabs.map((elem, idx) => {
      const isActive = activeTab === elem;

      return (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTabs(elem))}
          className={`
            px-8 py-4 rounded-xl font-semibold text-lg
            bg-transparent cursor-pointer active:scale-95
            transition-all duration-300 
            ${isActive
              ? "text-blue-300 border  border-blue-400/60 shadow-[0_0_35px_rgba(0,140,255,0.95)]"
              : "text-white border border-white/15 hover:border-blue-400/50 hover:text-blue-200 hover:shadow-[0_0_25px_rgba(0,140,255,0.6)]"
            }
          `}
        >
          {elem}
        </button>
      );
    })}
  </div>
);

}

export default Tabs