import axios from "axios"
import { GET_PRODACT } from "../actionType/actionType"
export const get_prodact = () => async(dispatch)=>{
try {
    const res=await axios.get("http://localhost:7000/api/article/get")
    dispatch({type:GET_PRODACT,payload: res.data})

    
} catch (error) {
    console.log(error)
    
}
}
export const post_prodact = (data) => async(dispatch)=>{
    try {
        const res=await axios.post("http://localhost:7000/api/article/post",data)
        dispatch(get_prodact())
        
        
    } catch (error) {
        console.log(error)
        
    }
}
  
