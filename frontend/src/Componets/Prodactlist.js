import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_prodact } from '../redux/action/action'

const Prodactlist = () => {
    const dispatch = useDispatch()
    const data= useSelector(state=>state.prodact)
    useEffect(()=>{
        dispatch(get_prodact())
    },[dispatch])
  return (
    <div>
        {
            data.map((el)=>(<img src={el.image} />  ))
        }
    </div>
  )
}

export default Prodactlist