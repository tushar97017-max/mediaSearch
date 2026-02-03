import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {
    const dispatch=useDispatch()
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast(item))

    }
  return (
     <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden '>

      <a target='_blank' className='h-full' href={item.url}>
          {item.type=='photos'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
        {item.type=='videos'?<video  className='h-full w-full object-cover object-center' autoPlay loop muted  src={item.src}></video>:''}
         {item.type=='gif'?<img  className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
      </a>


        <div  id='bottom' className= 'flex justify-between gap-3 items-center text-white absolute bottom-0 w-full  px-4 py-6 '>
          <h2 className='text-sm font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
          <button onClick={()=>{
          removeFromCollection(item)
          }} className='bg-indigo-600 text-white rounded px-3 cursor-pointer py-1 active:scale-95 font-medium'>Remove</button>
        </div>
    </div>
  )
}

export default CollectionCard