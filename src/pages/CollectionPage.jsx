import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection=useSelector(state=>state.collection.items)
  const dispatch=useDispatch()

  const clearAll=()=>{
    dispatch(clearCollection())
  }


  return (
  <div className='overflow-auto px-4 py-6 h-screen bg-black'>
    <div className='flex justify-between mb-6'>
      <h2 className='text-xl font-medium'>Your Collection</h2>
      <button onClick={()=>{
        clearAll()

      }} className='bg-red-600 px-5 py-2 active:scale-95 text-base font-medium rounded'>Clear all</button>

    </div>
      <div  className='flex justify-start w-full flex-wrap gap-6 '>
    {collection.map((item,idx)=>{
      return <div key={idx}>
     
      <CollectionCard item={item}/>
      </div>
    })}
    </div>
  </div>
  )
  
}

export default CollectionPage