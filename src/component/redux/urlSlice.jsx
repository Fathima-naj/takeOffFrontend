import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios";

const initialState={
    loading:false,
    error:null,
    originalUrl:null
}
const fetchCreateUrl=createAsyncThunk(
    'user/fetchCreateUrl',
    async()=>{
        const res=await axiosInstance('/urls/createUrl')
    console.log(res.data)
    return res.data
    },
)

export const urlSlice=createSlice({
name:'urls',
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(fetchCreateUrl.pending,(state)=>{
        state.loading=true,
        state.error=null
    })
    .addCase(fetchCreateUrl.fulfilled,(state,action)=>{
        state.loading=false,
        state.originalUrl=action.payload,
        state.error=null
    })
    .addCase(fetchCreateUrl.rejected,(state,action)=>{
        state.error=action.payload
    })
}
})

export default urlSlice.reducer