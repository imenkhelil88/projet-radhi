import { GET_PRODACT } from "../actionType/actionType"

const initialState = {
    
prodact:[]
}

const prodactreducer= (state = initialState, { type, payload }) => {
    console.log(payload)
  switch (type) {

  case GET_PRODACT:
    return { ...state,prodact:payload.article }

  default:
    return state
  }
}
export default prodactreducer
