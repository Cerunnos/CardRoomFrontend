const defaultState={
  deck:[],
  hand:[],
  discard:[],
  selectedCard:{}
}

const rootReducer=(state=defaultState,action)=>{
  switch(action.type){
    case 'SET_DECK':
      return {...state,deck:action.deck}
    case 'SET_HAND':
      return {...state,hand:action.hand}
    case 'SET_SELECTED_CARD':
      return {...state,selectedCard:action.card}
    default:
      return state
  }
}

export default rootReducer
