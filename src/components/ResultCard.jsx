import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {

  const dispatch=useDispatch()

  const addToCollection=(item)=>{
    dispatch(addCollection(item))
    dispatch(addedToast())
   
     
    

  }
  return (
    <div className='w-[18vw] shadow-[0_0_35px_rgba(0,140,255,0.50)]  relative h-80 bg-white rounded-xl overflow-hidden '>

      <a target='_blank' className='h-full' href={item.url}>
          {item.type=='photos'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
        {item.type=='videos'?<video  className='h-full w-full object-cover object-center' autoPlay loop muted  src={item.src}></video>:''}
         {item.type=='gif'?<img  className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
      </a>


        <div  id='bottom' className= 'flex justify-between gap-3 items-center text-white absolute bottom-0 w-full  px-4 py-6 '>
          <h2 className='text-sm font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
          <button onClick={()=>{
            addToCollection(item)
          }} className='bg-blue-600 shadow-[0_0_35px_rgba(0,140,255,0.95)] text-white rounded px-3 cursor-pointer py-1 active:scale-95 font-medium'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard