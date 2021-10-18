import React from 'react'
let initialState={
    text:""
}
export default function shop(state=initialState,action) {
      switch (action.type) {
        case "text":
            return {
                ...state,
               text:action.payload
            }
    
        default:
            return state
    }
}
