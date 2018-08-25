const defaultState={
  deck:[],
  hand:[],
  discard:[]
}

const rootReducer=(state=defaultState,action)=>{
  switch(action.type){
    case 'SET_DECK':
      return {...state,deck:action.deck}
    case 'SET_HAND':
      return {...state,hand:action.hand}
    default:
      return state
  }
}

export default rootReducer
