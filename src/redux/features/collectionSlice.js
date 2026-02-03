import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState={
    items:JSON.parse(localStorage.getItem('collection'))||[]
}


const collectionSlice=createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExists=state.items.find(
                items=>items.id===action.payload.id
            )
            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
            }

        },

        removeCollection:(state,action)=>{
            state.items=state.items.filter(
                items=>items.id!==action.payload
            )
             localStorage.setItem('collection',JSON.stringify(state.items)) 

        },

        clearCollection:(state)=>{
            state.items=[]
            localStorage.removeItem('collection')

        },
        addedToast:()=>{
toast.success('Added to collections', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
        },

        removeToast:()=>{
            toast.error('Remove from collection', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
        }



    }
})
export const {removeCollection,addedToast,removeToast ,addCollection,clearCollection }=collectionSlice.actions
export default collectionSlice.reducer;
