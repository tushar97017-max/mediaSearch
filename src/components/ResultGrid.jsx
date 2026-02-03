
import { useDispatch, useSelector } from 'react-redux'
import { fetchGIF, fetchPhotos ,fetchVideo } from '../api/meadiaApi'
import { setQuery, setLoading, setError,setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



const ResultGrid = () => {
    

    const dispatch=useDispatch()

    const {query,activeTab,error,results,loading}=useSelector((store)=>store.search)

   

    useEffect(function(){
        if(!query) return
         const getData=async()=>{


       try {
        dispatch(setLoading())

         let data=[]
        if(activeTab=='photos'){
            let response=await fetchPhotos(query)
            data=response.results.map((item)=>({
                id:item.id,
                type:'photos',
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full,
                url:item.links.html
            }))
        }

        if(activeTab=='videos'){
            let response=await fetchVideo(query)
            data=response.videos.map((item)=>({
                id:item.id,
                type:'videos',
                title:item.user.name || 'videos',
                thumbnail:item.image,
                src:item.video_files[0].link,
                url:item.url

            }))
        }

       
  if (activeTab === 'gif') {
  const response = await fetchGIF(query)
  

  data = response.data.map(item => ({
    id: item.id,
    type: 'gif',
    title: item.title || 'GIF',
    thumbnail: item.images.fixed_width_small_still.url,
    src: item.images.fixed_width.url,
    url:item.url
  }))
}



        dispatch(setResults(data))
        
       } catch (err) {
        dispatch(setError(err.message))
        
       }

    }
        getData()

    },[query,activeTab,dispatch])

    if(error) return <h1>error</h1>
    if(loading) return <h1><Spin className='px-8' indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} /></h1>
    
    

    
    

    
  return (
    <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-4'>
        {results.map((item,idx)=>{
            return <div key={idx}>
                <ResultCard item={item}/>
                
            </div>
        })}
    </div>
  )
}

export default ResultGrid